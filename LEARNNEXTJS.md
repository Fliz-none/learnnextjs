# I. Special File & Folder Conventions (Quy ước đặc biệt cho file và thư mục trong App Router)

1. Route Group → `(folder)`: Dùng dấu ngoặc () để nhóm route mà không ảnh hưởng URL.

   - Ví dụ: app/(auth)/login/page.tsx → URL /login, không thêm /auth.

2. Dynamic Routes → `[param]`: Dùng dấu ngoặc vuông [] để tạo param động.

   - Ví dụ: app/news/[id]/page.tsx → /news/1, /news/abc - Lấy giá trị qua params.id.

3. Catch-all Routes → [...param]: Gom toàn bộ phần còn lại của URL.

   - Ví dụ: app/docs/[...slug]/page.tsx → /docs/a/b/c → params.slug = ["a","b","c"].

4. Optional Catch-all Routes → [[...param]]

   - Giống [...param] nhưng có thể không có param.

   - Ví dụ: app/docs/[[...slug]]/page.tsx
     → /docs (params.slug = undefined)
     → /docs/a/b (params.slug = ["a","b"]).

5. Layout → layout.tsx

   - File layout.tsx định nghĩa UI bao quanh các page con.
   - Ví dụ: header/footer chung.

6. Template → template.tsx

   - Giống layout nhưng mỗi lần chuyển page sẽ remount lại.
   - Dùng khi cần reset state (vd: wizard form).

7. Loading UI → loading.tsx

   - Hiển thị UI loading khi page/layout đang fetch dữ liệu.
   - Next.js sẽ tự render khi có suspense.

8. Error UI → error.tsx

   - Bắt lỗi trong page/layout.
   - Có thể dùng reset() để retry.

9. Not Found UI → not-found.tsx

   - Render khi page không tồn tại (notFound() được gọi).

10. Default Route → default.tsx

    - Trong Parallel Routes (song song), định nghĩa nội dung mặc định khi slot chưa được chọn.

11. Server Actions → actions.ts

    - (Next.js 14+) file tách riêng function chạy ở server, gọi từ client.

12. Middleware → middleware.ts
    - Chạy trước khi request tới route (auth, logging, redirect...).
