# 📘 Next.js App Router – Special File & Folder Conventions

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
