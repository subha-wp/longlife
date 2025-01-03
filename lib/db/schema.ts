export const PRODUCTS_TABLE = `
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  capacity TEXT NOT NULL,
  voltage TEXT NOT NULL,
  price REAL NOT NULL,
  image_url TEXT,
  series TEXT NOT NULL CHECK (series IN ('standard', 'pro')),
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
)
`;
