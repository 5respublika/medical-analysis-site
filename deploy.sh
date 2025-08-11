#!/bin/bash
echo "�� Начинаем деплой..."

# Переходим в директорию проекта
cd /home/developer/medical-analysis-site

# Получаем последние изменения из Git
echo "📥 Получаем последние изменения..."
git pull origin main

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm install

# Собираем проект
echo "🔨 Собираем проект..."
npm run build

# Обновляем права доступа
echo "🔐 Обновляем права доступа..."
sudo chown -R www-data:www-data dist/
sudo chmod -R 755 dist/

# Перезапускаем Nginx
echo "🔄 Перезапускаем Nginx..."
sudo systemctl reload nginx

echo "✅ Деплой завершен успешно!"
echo "🌐 Сайт доступен по адресу: http://$(curl -s ifconfig.me)"
