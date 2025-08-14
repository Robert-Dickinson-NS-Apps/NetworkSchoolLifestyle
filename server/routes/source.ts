import { Router } from "express";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const router = Router();

// Endpoint to serve source code files
router.get("/source/*", (req, res) => {
  try {
    const filePath = req.url.replace('/source/', '');
    const fullPath = join(process.cwd(), filePath);
    
    // Security check - ensure file is within project directory
    if (!fullPath.startsWith(process.cwd())) {
      return res.status(403).json({ error: "Access denied" });
    }
    
    // Check if file exists
    if (!existsSync(fullPath)) {
      return res.status(404).json({ error: "File not found" });
    }
    
    // Read and return file content
    const content = readFileSync(fullPath, 'utf-8');
    
    res.setHeader('Content-Type', 'text/plain');
    res.send(content);
    
  } catch (error) {
    console.error("Error reading source file:", error);
    res.status(500).json({ error: "Failed to read file" });
  }
});

export default router;