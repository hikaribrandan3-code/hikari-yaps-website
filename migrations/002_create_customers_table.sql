-- Create customers table for tracking buyers
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  activation_code VARCHAR(7),
  payment_method VARCHAR(50),
  paid BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create indexes for fast lookups
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_customers_activation_code ON customers(activation_code);
CREATE INDEX idx_customers_paid ON customers(paid);

-- Enable RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Allow public to read/insert customers
CREATE POLICY "Allow public to insert customers"
  ON customers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to read customers"
  ON customers
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow update customers"
  ON customers
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);
