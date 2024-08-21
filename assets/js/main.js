      // Данные для каждой услуги, добавлены новые поля minmax и description
      const servicesData = {
        1: [
          { id: 1, name: 'Instagram Followers [Speed: 𝐅𝐀𝐒𝐓] ⚡ [Quality: 𝐈𝐧𝐝𝐢𝐚𝐧 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐀𝐜𝐜𝐨𝐮𝐧𝐭] ⚡ [MAX: 𝟏𝐤] 💍 [Server: 𝟏]', price: '$10', minmax: '100 / 10,000', description: 'High-quality likes from real users' },
          { id: 2, name: 'Instagram Followers', price: '$15', minmax: '50 / 5,000', description: 'Organic followers for your profile' }
        ],
        2: [
          { id: 1, name: 'Video Views', price: '$20', minmax: '200 / 20,000', description: 'Boost your video views significantly' },
          { id: 2, name: 'Video Comments', price: '$25', minmax: '10 / 500', description: 'Real comments from active users' }
        ],
        3: [
          { id: 1, name: 'YouTube Subscribers', price: '$30', minmax: '100 / 10,000', description: 'Increase your subscriber count quickly' },
          { id: 2, name: 'YouTube Likes', price: '$18', minmax: '50 / 5,000', description: 'Get more likes on your videosGet more likes on your videosGet more likes on your videosGet more likes on your videosGet more likes on your videosGet more likes on your videos' }
        ],
        4: [
          { id: 1, name: 'Telegram Members', price: '$12', minmax: '100 / 10,000', description: 'Grow your Telegram group with real members' },
          { id: 2, name: 'Telegram Views', price: '$8', minmax: '500 / 50,000', description: 'Increase the views on your Telegram posts' }
        ]
      };
    
      // Функция для обновления таблицы
      function updateTable(serviceId) {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';
        
        servicesData[serviceId].forEach(service => {
          const row = document.createElement('tr');
          
          row.innerHTML = `
            <td>${service.id}</td>
            <td>${service.name}</td>
            <td>${service.price}</td>
            <td>${service.minmax}</td>
            <td><button class="btn btn-outline-primary">View</button></td>
            <td><a href="#" class="btn btn-primary">Order</a></td>
          `;
          
          tableBody.appendChild(row);
        });
      }
    
      // Инициализация: выберем первый элемент (Instagram) по умолчанию
      document.addEventListener('DOMContentLoaded', function() {
        // Вызываем функцию для обновления таблицы с первым элементом (Instagram)
        updateTable(1);
    
        // Опционально: выделяем первый элемент визуально
        document.querySelector('.services_item_box[data-id="1"]').classList.add('active');
      });
    
      // Обработка кликов по элементам услуг
      document.querySelectorAll('.services_item_box').forEach(item => {
        item.addEventListener('click', function(event) {
          event.preventDefault(); // предотвращаем переход по ссылке
    
          // Убираем активный класс у всех элементов
          document.querySelectorAll('.services_item_box').forEach(el => el.classList.remove('active'));
    
          // Добавляем активный класс текущему элементу
          this.classList.add('active');
    
          // Получаем ID выбранной услуги
          const serviceId = this.getAttribute('data-id');
    
          // Обновляем таблицу данными выбранной услуги
          updateTable(serviceId);
        });
      });