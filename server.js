const express = require('express');
const fs = require('fs');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable compression for better performance
app.use(compression());

// Custom video streaming route with range support
app.get('/video_20250721_160603_edit.mp4', (req, res) => {
    const videoPath = path.join(__dirname, 'video_20250721_160603_edit.mp4');
    
    // Check if file exists
    if (!fs.existsSync(videoPath)) {
        return res.status(404).send('Video not found');
    }
    
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;
    
    if (range) {
        // Parse Range header for streaming
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        // Send entire file
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
            'Accept-Ranges': 'bytes',
        };
        
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});

// Serve static files (after custom routes)
app.use(express.static('.', {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.mp4')) {
            res.setHeader('Cache-Control', 'public, max-age=3600');
            res.setHeader('Accept-Ranges', 'bytes');
        }
    }
}));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wedding Photography Website server running on http://0.0.0.0:${PORT}`);
    console.log(`Video streaming optimized for large files`);
});

module.exports = app;