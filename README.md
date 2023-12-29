## cài đặt
dùng lệnh npm i để tải các module
tạo file .env chứa Api and Private Key của tài khoản ví metamask cua ban
sửa lại cấu hình network ở file hardhat.config
## tạo các smart contracts
dùng lệnh npx hardhat compile để kiểm tra các smartcontract
ở file deploy, tiến hành comment và thực thi từng smartcontract một, dùng lệnh npx hardhat run scripts/deploy.ts --bsctest để deploy lên smartcontract
sau đó dùng lệnh npx hardhat verify --network <smartcontract address> để đưa lên blockchain

## NOTE: 
verify với tham số sau smartconract address phù hợp với hàm contruct bên trong các smartcontract
