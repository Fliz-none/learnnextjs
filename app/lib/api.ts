const fakeUsers = [
	{ id: 1, email: "lhd4388@gmail.com", password: "123456", user_name: "LHD" },
	{ id: 2, email: "lucifer121003@gmail.com", password: "123456", user_name: "Lucifer" },
];

export async function loginApi(email: string, password: string) {
	const user = fakeUsers.find((u) => u.email === email && u.password === password);

	if (user) {
		return { token: "fake-jwt-token-123", user };
	}

	throw new Error("Sai email hoặc mật khẩu");
}

export async function registerApi(email: string, password: string) {
	const userExists = fakeUsers.some((u) => u.email === email);

	if (userExists) {
		throw new Error("Email đã tồn tại");
	}

	// Thêm user vào fake db
	fakeUsers.push({ id: Date.now(), email, password, user_name: email.split("@")[0] });

	return { token: "fake-jwt-token-456", user: { id: 2, email, user_name: email.split("@")[0] } };
}
