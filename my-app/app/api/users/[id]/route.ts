
import { NextResponse } from 'next/server';
type PropTypes = {
    params: {
        id: number,
    },
}
const users = [
    { id: 1, name: "John Doe", age: 18, },
    { id: 2, name: "asa", age: 183 },
    { id: 3, name: "Mary", age: 19 },
    { id: 4, name: "Bob", age: 20 },
    { id: 5, name: "Alice", age: 21 },
]

export async function GET(request: Request, { params }: PropTypes) {
    const id = params.id;
    const user = users.find((u) => u.id == id);
    console.log(user);
    if (!user) {
        return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` }, { status: 404 });
    }
    return NextResponse.json(user);
}


// bai 4
export async function DELETE(request: Request, { params }: PropTypes) {
    const id = params.id;
    return NextResponse.json({ message: `Xoá người dùng có id = ${id} thành công`, idForDelete:id });
}
// bai 5

export async function POST(request: Request) {
   
      const data = await request.json();
      return NextResponse.json({
        message: "Thêm mới thông tin người dùng thành công",
      },data);
   
  }
  export async function PUT(request: Request, { params }: PropTypes){
    const data = await request.json();
    const {id}= params;
    return NextResponse.json({
        message: `Câp nhât thông tin người dùng có id = ${id} thành công`,
        updatedData:data,
    });

  }