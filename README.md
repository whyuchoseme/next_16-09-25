Сервер для курса по next.js
Предоставляет API для магазина теннисных товаров

Инициализация
установка зависимостей - npm i
инициализация prisma - npx prisma migrate dev --name init
наполнение данными - npx prisma migrate reset. Соглашаемся с очисткой данных
API
схема данных - prisma/schema.prisma

наполнение данными - prisma/seed.ts

npm run dev для запуска сервера на http://localhost:4000

POST /api/auth/login
Для логина в body передается login, password

POST /api/auth/signup
Для логина в body передается login, password

DELETE /api/auth/signup
Логаут

GET /api/auth/user
Информация по текущему пользователю

GET /api/meta/product/[productId]
Метаданные по продукту

GET /api/product/[productId]
Информация по продукту

POST, DELETE api/product/[productId]/favorite
Добавить/удалить из избранного

GET api/products
Список товаров

Параметры:

page и limit для пагинации
brand - фильтрация по имени бренда
GET api/top-10
Топ 10 товаров

GET api/brands
Топ 10 товаров


<!-- ДЗ - 1
Зарегистрироваться на гитхабе (если нет аккаунта) и создать публичный репозиторий для домашнего проекта - https://github.com/
Для отработки механизма проверки ДЗ, нужно создать ветку hw-1, в рамках нее создать readme файл, сделать коммит и создать пулреквест. Ссылку на пулреквест скинуть в чатик в тред по ДЗ-1. После аппрува можно мержить и подтягивать изменения в main ветку в локальный репозиторий
В качестве ide советую использовать vs code - https://code.visualstudio.com/. Если уже есть ide (например, webstorm), можете продолжать использовать
поставить node.js - https://nodejs.org/en
Крэш курс по гиту - https://www.youtube.com/playlist?list=PLDyvV36pndZEgSRzWGuXFrTRUFuAAMciE
запросить доступ к https://github.com/zubkov7/nextjs-20250916 и https://github.com/zubkov7/next-webinar-server -->

ДЗ - 2
создать проект с помощью npx create-next-app@latest
почистить проект от ненужных файлов
на основе макетов и моковых данных подготовить страницы: главная (/), список ракеток (/rackets), страница ракетки (/racket/[id])
в шапке находятся ссылки: главная и ракетки (активная ссылка выделяется). В футере информация о сайте. Шапка и футер есть на каждой странице
макеты для ориентира, можно делать на свой вкус
для того, чтобы работали картинки нужно склонировать репозиторий и запустить сервер - https://github.com/zubkov7/next-webinar-server. Репозиторий приватный, поэтому пишите мне, я вас добавлю. В readme.md необходимая информация по запуску
с помощью generateStaticParams предгенерировать страницы для 3-ех товаров (айди на ваш выбор)
