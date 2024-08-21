import { NextResponse } from 'next/server';

// Mảng lưu trữ dữ liệu người dùng
const users = [
    { id: 1, name: "John Doe", age: 18, },
    { id: 2, name: "asa", age: 183 },
    { id: 3, name: "Mary", age: 19 },
    { id: 4, name: "Bob", age: 20 },
    { id: 5, name: "Alice", age: 21 },
]
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name')?.toLowerCase() || '';

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name)
  );

  if (filteredUsers.length == 0) {
    return NextResponse.json({ message: `Không tìm thấy người dùng phù hợp với tên "${name}"` }, { status: 404 });
  }
  return NextResponse.json(filteredUsers);
}
