document.getElementById('add-training').addEventListener('click', () => {
    const tableBody = document.querySelector('#workout-table-body');
    const trainingDate = document.getElementById('training-date').value;
    const selectedWeek = document.getElementById('week-number').value;

    // Проверяем, что дата выбрана и неделя введена
    if (!trainingDate) {
        alert("Пожалуйста, выберите дату.");
        return;
    }
    
    if (!selectedWeek) {
        alert("Пожалуйста, введите номер недели.");
        return;
    }

    // Добавление разделителя между днями тренировок
    if (tableBody.children.length > 0) {
        const separatorRow = document.createElement('tr');
        separatorRow.innerHTML = `<td colspan="8" style="font-weight: bold; text-align: center; background-color: rgba(0, 0, 0, 0.5); color: #f9d74b;">День тренировки: ${trainingDate}</td>`;
        tableBody.appendChild(separatorRow);
    }

    // Добавление 5 строк для одной тренировки
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${trainingDate}</td> <!-- Используем выбранную дату -->
            <td>${selectedWeek}</td> <!-- Номер недели -->
            <td>
                <select class="exercise-select">
                    <option value="Румынская тяга с гантелями">Румынская тяга с гантелями</option>
                    <option value="Планка">Планка</option>
                    <option value="Ягодичный мост с гантелью на тазу">Ягодичный мост с гантелью на тазу</option>
                    <option value="Разгибание спины лежа на животе">Разгибание спины лежа на животе</option>
                    <option value="Наклоны в стороны с гантелью">Наклоны в стороны с гантелью</option>
                </select></td>
            <!-- Поля для подходов и повторений -->
            <td><input type="number" placeholder="1-4" min="1" max="4"></td> <!-- Подходы -->
            <td><input type="number" placeholder="1-25" min="1" max="25"></td> <!-- Повторения -->
            <td><input type="number" placeholder="Фактический вес"></td>
            <td><input type="text" placeholder="Комментарии"></td>
            <td><input type="text" placeholder="40 минут"></td> <!-- Время тренировки -->
        `;
        
        tableBody.appendChild(row);
    }
});

// Удаление последней тренировки
document.getElementById('remove-training').addEventListener('click', () => {
    const tableBody = document.querySelector('#workout-table-body');
    
    if (tableBody.children.length === 0) {
        alert("Нет тренировок для удаления.");
        return;
    }

    if (confirm("Вы уверены, что хотите удалить последнюю тренировку?")) {
        const lastTrainingRows = Array.from(tableBody.children).slice(-6); // Последние 5 строк + разделитель
        lastTrainingRows.forEach(row => tableBody.removeChild(row));
    }
});