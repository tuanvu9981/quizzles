## FRONT END for Learning Service (web)

### 1. Folder structure

- **api**: Định nghĩa API, route, method thao tác cơ bản 
- **assets**: Chứa ảnh (file png, jpg, svg)
- **components**: Chứa các thành phần code UI có thể tái sử dụng được
- **configs**: Chứa các biến môi trường đọc từ file .env 
- **constants**: Chứa các route với định nghĩa cố định sẵn, cũng như 1 số hằng số như số phân trang (pagination)... 
- **containers**: Chứa các thành phần phụ trợ nhỏ lẻ để chỗ trợ xây pages
- **environments**: Các file .env chứa các biến môi trường 
- **errors**: 
- **fonts**: Chứa font chữ nhận dạng thương hiệu: Báo Mới 
- **languages**: Các file json & js chứa định nghĩa về các cách nói của các ngôn ngữ cho cùng 1 key 
(viet = {"backMain": "Quay lại trang chủ"}, eng = {"backMain": "Back to Main Page"})
- **pages**: Các trang lớn của project như course, chapter, ...
- **redux**: 
- **router**: Chứa các định nghĩa cho route (public và private), cũng như cách chúng được hiển thị 
- **service**:
- **styles**: Các định nghĩa UI chung như color, theme, width 
- **utils**: 1 số hàm tiện ích như thao tác với localStorage, hàm chuyển đỗi chữ hoa thường, snake style và camel style