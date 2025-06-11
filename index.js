function hitungRSS() {
            const food = parseFloat(document.getElementById('Food').value) ;
            const wood = parseFloat(document.getElementById('Wood').value) ;
            const stone = parseFloat(document.getElementById('Stone').value) ;
            const gold = parseFloat(document.getElementById('Gold').value) ;
            const levelTradingPost = parseInt(document.getElementById('levelTradingPost').value);

            let persentasePajak;
            switch (levelTradingPost) {
                case 1:
                    persentasePajak = 0.35; 
                    break;
                case 2:
                    persentasePajak = 0.34; 
                    break;
                case 3:
                    persentasePajak = 0.33; 
                    break;
                case 4:
                    persentasePajak = 0.32; 
                    break;
                case 5:
                    persentasePajak = 0.31; 
                    break;
                case 6:
                    persentasePajak = 0.30; 
                    break;
                case 7:
                    persentasePajak = 0.29; 
                    break;
                case 8:
                    persentasePajak = 0.28; 
                    break;
                case 9:
                    persentasePajak = 0.27; 
                    break;
                case 10:
                    persentasePajak = 0.26; 
                    break;
                case 11:
                    persentasePajak = 0.25; 
                    break;
                case 12:
                    persentasePajak = 0.24; 
                    break;
                case 13:
                    persentasePajak = 0.23; 
                    break;
                case 14:
                    persentasePajak = 0.22; 
                    break;
                case 15:
                    persentasePajak = 0.21; 
                    break;
                case 16:
                    persentasePajak = 0.20; 
                    break;
                case 17:
                    persentasePajak = 0.19; 
                    break;
                case 18:
                    persentasePajak = 0.18; 
                    break;
                case 19:
                    persentasePajak = 0.17; 
                    break;
                case 20:
                    persentasePajak = 0.16; 
                    break;
                case 21:
                    persentasePajak = 0.15; 
                    break;
                case 22:
                    persentasePajak = 0.14; 
                    break;
                case 23:
                    persentasePajak = 0.12; 
                    break;
                case 24:
                    persentasePajak = 0.10; 
                    break;
                case 25:
                    persentasePajak = 0.08; 
                    break;
                default:
                    persentasePajak = 0; 
            }
            function hitungResource(jumlah) {
                if (isNaN(jumlah) || jumlah < 0) {
                    return 0;
                }
                const pajak = jumlah * persentasePajak;
                return jumlah - pajak;
            }

            document.getElementById('hasilFood').textContent = hitungResource(food).toFixed(2);
            document.getElementById('hasilWood').textContent = hitungResource(wood).toFixed(2);
            document.getElementById('hasilStone').textContent = hitungResource(stone).toFixed(2);
            document.getElementById('hasilGold').textContent = hitungResource(gold).toFixed(2);
        }