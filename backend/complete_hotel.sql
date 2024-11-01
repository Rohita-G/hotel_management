-- Drop the existing database if it exists (use with caution)
DROP DATABASE IF EXISTS HotelManagement;

-- Create the database
CREATE DATABASE HotelManagement;
USE HotelManagement;

-- Table: UserAccounts
CREATE TABLE IF NOT EXISTS UserAccounts (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Guest', 'Admin', 'Staff', 'Manager') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Table: UserSessions
CREATE TABLE IF NOT EXISTS UserSessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES UserAccounts(user_id) ON DELETE CASCADE
);

-- Table: Guests
CREATE TABLE IF NOT EXISTS Guests (
    guest_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    FOREIGN KEY (user_id) REFERENCES UserAccounts(user_id) ON DELETE SET NULL
);

-- Table: Rooms
CREATE TABLE IF NOT EXISTS Rooms (
    room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_type VARCHAR(50) NOT NULL,
    description TEXT,
    base_price DECIMAL(10, 2) NOT NULL,
    availability BOOLEAN DEFAULT TRUE,
    max_occupancy INT NOT NULL,
    image VARCHAR(255)
);

-- Table: Bookings
CREATE TABLE IF NOT EXISTS Bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    booking_date DATE NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10, 2),
    special_requests TEXT,
    status ENUM('Booked', 'Checked-In', 'Cancelled', 'Completed') DEFAULT 'Booked',
    FOREIGN KEY (guest_id) REFERENCES Guests(guest_id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE
);

-- Table: Payments
CREATE TABLE IF NOT EXISTS Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50),
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id) ON DELETE CASCADE
);

-- Table: Amenities
CREATE TABLE IF NOT EXISTS Amenities (
    amenity_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) DEFAULT 0.00
);

-- Table: Room_Amenities (Join table between Rooms and Amenities)
CREATE TABLE IF NOT EXISTS Room_Amenities (
    room_amenity_id INT PRIMARY KEY AUTO_INCREMENT,
    room_id INT NOT NULL,
    amenity_id INT NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE,
    FOREIGN KEY (amenity_id) REFERENCES Amenities(amenity_id) ON DELETE CASCADE
);

-- Table: SeasonalPricing
CREATE TABLE IF NOT EXISTS SeasonalPricing (
    season_id INT PRIMARY KEY AUTO_INCREMENT,
    room_id INT NOT NULL,
    start_date DATE,
    end_date DATE,
    seasonal_price DECIMAL(10, 2),
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE
);

-- Table: UserActivityLogs
CREATE TABLE IF NOT EXISTS UserActivityLogs (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    action VARCHAR(255),
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES UserAccounts(user_id) ON DELETE CASCADE
);

-- Table: Offers
CREATE TABLE IF NOT EXISTS Offers (
    offer_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    discount DECIMAL(5, 2) NOT NULL,
    valid_until DATE
);

-- Table: Blogs
CREATE TABLE IF NOT EXISTS Blogs (
    blog_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    author VARCHAR(100),
    published_date DATE
);

-- Table: Reviews
CREATE TABLE IF NOT EXISTS Reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    rating INT,  -- Removed CHECK constraint for compatibility with MySQL versions before 8.0
    comment TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES UserAccounts(user_id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE
);

-- Table: LoyaltyPoints
CREATE TABLE IF NOT EXISTS LoyaltyPoints (
    loyalty_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    points INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES UserAccounts(user_id) ON DELETE CASCADE
);

-- Table: FAQs
CREATE TABLE IF NOT EXISTS FAQs (
    faq_id INT PRIMARY KEY AUTO_INCREMENT,
    question TEXT NOT NULL,
    answer TEXT
);

-- Table: Discounts
CREATE TABLE IF NOT EXISTS Discounts (
    discount_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    percentage DECIMAL(5, 2),
    conditions TEXT
);

-- Table: Invoices
CREATE TABLE IF NOT EXISTS Invoices (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT NOT NULL,
    date DATE NOT NULL,
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id) ON DELETE CASCADE
);

-- Table: Events
CREATE TABLE IF NOT EXISTS Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(100),
    event_date DATE,
    description TEXT,
    price DECIMAL(10, 2)
);

-- Table: Itineraries
CREATE TABLE IF NOT EXISTS Itineraries (
    itinerary_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    travel_dates TEXT,
    preferences TEXT,
    FOREIGN KEY (user_id) REFERENCES UserAccounts(user_id) ON DELETE CASCADE
);

-- Index for faster search
CREATE INDEX idx_user_email ON UserAccounts(email);
CREATE INDEX idx_room_availability ON Rooms(availability);
CREATE INDEX idx_booking_date ON Bookings(booking_date);

-- Triggers
-- Trigger to update last login timestamp
DELIMITER $$
CREATE TRIGGER trg_update_last_login
AFTER UPDATE ON UserSessions
FOR EACH ROW
BEGIN
    IF NEW.session_token IS NOT NULL THEN
        UPDATE UserAccounts SET last_login = CURRENT_TIMESTAMP WHERE user_id = NEW.user_id;
    END IF;
END$$
DELIMITER ;

-- Trigger to auto-update total price in Bookings based on seasonal or base price
DELIMITER $$
CREATE TRIGGER trg_calculate_booking_price
BEFORE INSERT ON Bookings
FOR EACH ROW
BEGIN
    DECLARE season_price DECIMAL(10, 2);
    SET season_price = (SELECT seasonal_price FROM SeasonalPricing 
                        WHERE room_id = NEW.room_id 
                        AND NEW.check_in_date BETWEEN start_date AND end_date
                        LIMIT 1);
    SET NEW.total_price = IFNULL(season_price, (SELECT base_price FROM Rooms WHERE room_id = NEW.room_id)) 
                          * DATEDIFF(NEW.check_out_date, NEW.check_in_date);
END$$
DELIMITER ;

-- Trigger to adjust loyalty points after review
DELIMITER $$
CREATE TRIGGER trg_add_loyalty_points
AFTER INSERT ON Reviews
FOR EACH ROW
BEGIN
    UPDATE LoyaltyPoints SET points = points + 10 WHERE user_id = NEW.user_id;
END$$
DELIMITER ;