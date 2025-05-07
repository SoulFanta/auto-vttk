import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');

export async function GET() {
  try {
    const files = fs.readdirSync(galleryDir)
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        url: `/images/gallery/${file}`,
        filename: file,
      }));
    
    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load gallery' },
      { status: 500 }
    );
  }
}