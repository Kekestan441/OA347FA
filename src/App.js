import React, { useState } from "react";
import "./App.css";

const PRODUCTS = [
  { id: 1, title: "Сердце", desc: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов", price: 2800, img: "/images/p1.jpg" },
  { id: 2, title: "Красота спасёт мир", desc: "Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан", price: 750, img: "/images/p2.jpg" },
  { id: 3, title: "Круглый набор", desc: "40 макаронс в круглой коробке с персональной надписью", price: 3900, img: "/images/p3.jpg" },
  { id: 4, title: "Набор на 9", desc: "Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня", price: 950, img: "/images/p4.jpg" },
  { id: 5, title: "Набор на 16", desc: "Набор 16 шт. Вкусы: солёная карамель, голубой сыр, пармезан, шоколад", price: 1500, img: "/images/p5.jpg" },
  { id: 6, title: "Сердце", desc: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов", price: 2500, img: "/images/p6.jpg" }
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} />
      <div className="info">
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <div className="bottom">
          <span className="price">{product.price} руб</span>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(6);

  return (
    <div className="page">
      {/* Верхняя панель */}
      <div className="topbar">
        <div className="links">
          <a>Гарантия свежести</a>
          <a>Доставка и оплата</a>
          <a>Оптовые поставки</a>
          <a>Контакты</a>
        </div>
        <div className="right">
          <span>Санкт-Петербург ▾</span>
          <span>8 812 309-82-88</span>
          <span className="cart">🛒 (4 товара)</span>
        </div>
      </div>

      {/* Логотип и меню */}
      <div className="menu">
        <div className="logo">macaron shop</div>
        <ul>
          <li>СЛАДКИЕ ДНИ</li>
          <li>ПОДАРОЧНЫЕ НАБОРЫ</li>
          <li>СОБРАТЬ НАБОР</li>
          <li>СОЗДАТЬ ДИЗАЙН</li>
          <li>КОМПАНИЯМ</li>
          <li>ВЕСЬ КАТАЛОГ</li>
        </ul>
      </div>

      {/* Навигация */}
      <div className="breadcrumbs">
        Главная &gt; Каталог &gt; <b>Готовые наборы</b>
      </div>

      {/* Заголовок */}
      <h1 className="title">Готовые наборы</h1>

      {/* Категории */}
      <div className="categories">
        {["Свадьба", "Девичник", "День рождения", "8 марта", "23 февраля", "Новый год", "День учителя", "День тренера", "1 сентября", "Пасха", "Без печати"].map(
          (c, i) => (
            <button key={i}>{c}</button>
          )
        )}
      </div>

      {/* Сетка продуктов */}
      <div className="grid">
        {PRODUCTS.slice(0, visible).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Показать ещё */}
      {visible < PRODUCTS.length && (
        <div className="more">
          <button onClick={() => setVisible((v) => v + 3)}>Показать ещё</button>
        </div>
      )}
    </div>
  );
}
