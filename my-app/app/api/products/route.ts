import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), '/data/product.json');

export async function POST(request: Request) {
    try {
        const newProduct = await request.json();
        const fileData = fs.readFileSync(filePath, 'utf8');
        const products = JSON.parse(fileData);

        const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        const productToAdd = { id: newId, ...newProduct };
        products.push(productToAdd);
        fs.writeFileSync(filePath, JSON.stringify(products));
        return NextResponse.json({
            message: "Thêm mới sản phẩm thành công",
        }, products);
    } catch (error) {
        return NextResponse.json({ message: "Lỗi khi thêm sản phẩm mới" });
    }
}

export async function GET() {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileData);
    return NextResponse.json(products);
}
