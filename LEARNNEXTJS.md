# 📘 Next.js App Router – Thư mục đặ biệt và quy ước

Trong **Next.js App Router**, có một số **quy ước đặc biệt** về file và thư mục giúp framework hiểu cách routing, layout, và xử lý UI.

---

## I. 🗂 Special Folders (Thư mục đặc biệt)

### 1. **Route Group** → `(folder)`

Dùng dấu ngoặc `()` để nhóm route mà **không ảnh hưởng URL**.

```bash
app/(auth)/login/page.tsx  →  /login   (không phải /auth/login)
```

---

### 2. **Dynamic Routes** → `[param]`

Dùng dấu ngoặc vuông `[]` để tạo **param động**.

```bash
app/news/[id]/page.tsx
# /news/1
# /news/abc   → params.id
```

---

### 3. **Catch-all Routes** → `[...param]`

Gom toàn bộ phần còn lại của URL.

```bash
app/docs/[...slug]/page.tsx
# /docs/a/b/c   → params.slug = ["a","b","c"]
```

---

### 4. **Optional Catch-all Routes** → `[[...param]]`

Giống `[...param]` nhưng **có thể không có param**.

```bash
app/docs/[[...slug]]/page.tsx
# /docs          → params.slug = undefined
# /docs/a/b      → params.slug = ["a","b"]
```

---

## II. 📄 Special Files (File đặc biệt)

| File              | Chức năng                                                             | Ví dụ           |
| ----------------- | --------------------------------------------------------------------- | --------------- |
| **layout.tsx**    | Định nghĩa UI bao quanh các page con (header/footer chung).           | Shared layout   |
| **template.tsx**  | Giống layout nhưng **remount lại** mỗi lần chuyển page (reset state). | Wizard form     |
| **loading.tsx**   | Hiển thị khi page/layout đang **fetch dữ liệu** (Suspense).           | Loading spinner |
| **error.tsx**     | Bắt lỗi trong page/layout, có thể gọi `reset()` để retry.             | Error boundary  |
| **not-found.tsx** | Render khi gọi `notFound()` hoặc URL không tồn tại.                   | 404 page        |
| **default.tsx**   | Trong **Parallel Routes**, định nghĩa nội dung mặc định cho slot.     | Default view    |
| **actions.ts**    | (Next.js 14+) Định nghĩa **Server Actions** (function chạy ở server). | Form submit     |
| **middleware.ts** | Chạy trước khi request tới route (auth, logging, redirect…).          | Auth check      |

---

## ✅ Tóm tắt

- `(folder)` → Route Group (tổ chức code, không ảnh hưởng URL).
- `[param]`, `[...param]`, `[[...param]]` → Dynamic Routing.
- `layout.tsx`, `template.tsx` → Bao quanh UI.
- `loading.tsx`, `error.tsx`, `not-found.tsx` → Xử lý trạng thái UI.
- `default.tsx` → Default cho Parallel Routes.
- `actions.ts`, `middleware.ts` → Logic phía server.

---

🔗 Tham khảo: [Next.js Documentation](https://nextjs.org/docs/app/building-your-application/routing)

# 📊 So sánh React Client Component vs Next.js Server Component
| Đặc điểm | **Client Component (React)** | **Server Component (Next.js)** |
|----------|------------------------------|--------------------------------|
| **Chạy ở đâu** | Trình duyệt (browser, client-side) | Server (Node.js, Edge runtime) |
| **Ngôn ngữ** | JavaScript/TypeScript chạy trên client | JavaScript/TypeScript nhưng thực thi ở server |
| **Khả năng truy cập API** | Chỉ gọi được API qua `fetch` từ browser | Có thể truy cập **DB, API key, env server-side** trực tiếp |
| **SEO** | Không tốt bằng (render ở client → Google phải chờ) | Rất tốt (SSR/SSG trả HTML sẵn cho Google) |
| **Hiệu năng** | Tải JS nhiều hơn, có thể chậm nếu app phức tạp | Nhẹ hơn (ít JS gửi xuống client) |
| **Trạng thái (state)** | Có `useState`, `useEffect`, event handlers (onClick, onChange…) | ❌ Không có state, hook client, hay event handler |
| **Khi nào render lại** | Mỗi lần state/props thay đổi → re-render trên client | Chỉ render lại khi server re-fetch data |
| **Khi nào nên dùng** | - Form, input, button có sự kiện <br> - Animation, interactivity <br> - State cục bộ (`useState`, `useEffect`) | - Fetch data từ DB/API <br> - Render HTML tĩnh/ít thay đổi <br> - Chia sẻ layout chung <br> - SEO nội dung tĩnh |
| **Ví dụ** | `onClick` mở modal, `useState` quản lý form | Trang blog, danh sách sản phẩm lấy từ DB |
