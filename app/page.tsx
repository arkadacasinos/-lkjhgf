export default function Page() {
  return (
    <div className="lac-shell">
      {/* Шапка */}
      <header className="lac-topbar">
        <div className="lac-container">
          <div className="lac-topbar-inner">
            <a href="#top" className="lac-brand" aria-label="La Casino — официальный сайт">
              <span className="lac-brand-mark">L</span>
              <span>La Casino</span>
            </a>
            <nav className="lac-nav" aria-label="Основная навигация">
              <a href="#features" className="lac-nav-link">Преимущества</a>
              <a href="#games" className="lac-nav-link">Игры</a>
              <a href="#bonuses" className="lac-nav-link">Бонусы</a>
              <a href="#start" className="lac-nav-link">Как начать</a>
              <a href="#faq" className="lac-nav-link">Вопросы</a>
            </nav>
            <a href="#start" className="lac-cta-mini">Играть</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="lac-hero">
          <div className="lac-container">
            <div className="lac-hero-grid">
              <div>
                <span className="lac-hero-eyebrow">
                  <span className="lac-hero-eyebrow-dot" aria-hidden="true"></span>
                  Официальный сайт La Casino
                </span>
                <h1 className="lac-hero-title">
                  La Casino — твой проводник в мир <span className="lac-hero-title-accent">азарта и удачи</span>
                </h1>
                <p className="lac-hero-lead">
                  Добро пожаловать на официальный сайт La Casino. Здесь собраны лучшие слоты, рулетка, карточные игры и live-дилеры. Играть в La Casino можно прямо сейчас — без задержек, без лишних шагов, только удовольствие от процесса.
                </p>
                <div className="lac-hero-actions">
                  <a href="#start" className="lac-btn-primary">Начать играть в La Casino</a>
                  <a href="#games" className="lac-btn-ghost">Посмотреть игры</a>
                </div>
                <div className="lac-hero-stats">
                  <div>
                    <div className="lac-stat-num">2500+</div>
                    <div className="lac-stat-label">Игр в каталоге</div>
                  </div>
                  <div>
                    <div className="lac-stat-num">24/7</div>
                    <div className="lac-stat-label">Поддержка онлайн</div>
                  </div>
                  <div>
                    <div className="lac-stat-num">5 мин</div>
                    <div className="lac-stat-label">До первого спина</div>
                  </div>
                </div>
              </div>

              <div className="lac-hero-visual" aria-hidden="true">
                <div className="lac-hero-card lac-hero-card-main">
                  <div>
                    <div className="lac-hero-card-row">
                      <span className="lac-hero-card-chip">Текущий баланс</span>
                      <span className="lac-hero-card-chip" style={{ color: '#d4af37' }}>VIP</span>
                    </div>
                    <div className="lac-hero-card-value">₽ 48 250</div>
                    <div className="lac-hero-card-meta">Бонусный счёт: ₽ 12 400</div>
                  </div>
                  <div>
                    <div className="lac-hero-card-row">
                      <span className="lac-hero-card-chip">Последний выигрыш</span>
                    </div>
                    <div className="lac-hero-card-meta" style={{ fontSize: '15px', color: '#f4f1ea' }}>
                      Book of Ra · x128
                    </div>
                  </div>
                </div>
                <div className="lac-hero-card lac-hero-card-float">
                  <div className="lac-hero-card-float-icon">L</div>
                  <div className="lac-hero-card-float-text">
                    <strong>Зеркало готово</strong>
                    Рабочее зеркало La Casino всегда под рукой
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="lac-section" id="features">
          <div className="lac-container">
            <div className="lac-section-head">
              <span className="lac-section-eyebrow">Почему выбирают нас</span>
              <h2 className="lac-section-title">La Casino официальный сайт — честная игра и моментальные выплаты</h2>
              <p className="lac-section-lead">
                Мы сделали La Casino таким, чтобы в него хотелось возвращаться. Прозрачные правила, быстрые транзакции и поддержка, которая действительно помогает — без шаблонных ответов и долгого ожидания.
              </p>
            </div>

            <div className="lac-feature-grid">
              <article className="lac-feature-card">
                <div className="lac-feature-icon">01</div>
                <h3 className="lac-feature-title">Лицензия и честность</h3>
                <p className="lac-feature-text">
                  La Casino официальный сайт работает по международной лицензии. Все слоты проходят регулярные проверки, а генератор случайных чисел сертифицирован независимыми аудиторами. Здесь не бывает подкруток — только чистая математика удачи.
                </p>
              </article>

              <article className="lac-feature-card">
                <div className="lac-feature-icon">02</div>
                <h3 className="lac-feature-title">Рабочее зеркало La Casino</h3>
                <p className="lac-feature-text">
                  Если основной адрес недоступен, на помощь приходит рабочее зеркало La Casino. Оно полностью повторяет функционал сайта, синхронизирует баланс и бонусы. Играть через зеркало La Casino так же безопасно, как и через главный домен.
                </p>
              </article>

              <article className="lac-feature-card">
                <div className="lac-feature-icon">03</div>
                <h3 className="lac-feature-title">Моментальный вывод средств</h3>
                <p className="lac-feature-text">
                  Выигрыш — это деньги, которые хочется получить здесь и сейчас. La Casino онлайн обрабатывает заявки на вывод в течение 15 минут. Поддерживаются карты, электронные кошельки и криптовалюта без скрытых комиссий.
                </p>
              </article>

              <article className="lac-feature-card">
                <div className="lac-feature-icon">04</div>
                <h3 className="lac-feature-title">Игры на любой вкус</h3>
                <p className="lac-feature-text">
                  В каталоге La Casino собрано больше двух с половиной тысяч развлечений: классические слоты, рулетка, блэкджек, баккара, покер и live-казино с живыми дилерами. Каждый найдёт игру под настроение и банкролл.
                </p>
              </article>

              <article className="lac-feature-card">
                <div className="lac-feature-icon">05</div>
                <h3 className="lac-feature-title">Бонусы без мелкого шрифта</h3>
                <p className="lac-feature-text">
                  Приветственный пакет, кэшбэк, фриспины, турниры и программа лояльности — всё это доступно игрокам La Casino. Условия прозрачные: вейджер, сроки и список игр указаны заранее, без сюрпризов в правилах.
                </p>
              </article>

              <article className="lac-feature-card">
                <div className="lac-feature-icon">06</div>
                <h3 className="lac-feature-title">Поддержка 24/7</h3>
                <p className="lac-feature-text">
                  Служба поддержки La Casino работает круглосуточно. Можно написать в чат, на почту или в мессенджер — ответ придёт в течение пары минут. Реальные люди, а не боты, разбираются в каждой ситуации.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Игровой каталог */}
        <section className="lac-section lac-catalog" id="games">
          <div className="lac-container">
            <div className="lac-section-head">
              <span className="lac-section-eyebrow">Каталог развлечений</span>
              <h2 className="lac-section-title">Играть в La Casino — тысячи слотов и live-столов</h2>
              <p className="lac-section-lead">
                Ля казино предлагает игры от ведущих мировых провайдеров. Среди партнёров — NetEnt, Microgaming, Pragmatic Play, Evolution, Play'n GO и десятки других студий. Качество графики, звука и механики — на высшем уровне.
              </p>
            </div>

            <div className="lac-catalog-grid">
              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">7</div>
                <span className="lac-game-tile-tag">Слоты</span>
                <div>
                  <h3 className="lac-game-tile-name">Классические слоты</h3>
                  <p className="lac-game-tile-meta">Book of Ra, Crazy Monkey, Fruit Cocktail</p>
                </div>
              </article>

              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">R</div>
                <span className="lac-game-tile-tag">Столы</span>
                <div>
                  <h3 className="lac-game-tile-name">Рулетка и блэкджек</h3>
                  <p className="lac-game-tile-meta">Европейская, американская, французская рулетка</p>
                </div>
              </article>

              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">L</div>
                <span className="lac-game-tile-tag">Live</span>
                <div>
                  <h3 className="lac-game-tile-name">Live-казино</h3>
                  <p className="lac-game-tile-meta">Живые дилеры и атмосфера настоящего зала</p>
                </div>
              </article>

              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">J</div>
                <span className="lac-game-tile-tag">Джекпот</span>
                <div>
                  <h3 className="lac-game-tile-name">Прогрессивные джекпоты</h3>
                  <p className="lac-game-tile-meta">Mega Moolah, Divine Fortune, Age of the Gods</p>
                </div>
              </article>

              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">P</div>
                <span className="lac-game-tile-tag">Покер</span>
                <div>
                  <h3 className="lac-game-tile-name">Видеопокер</h3>
                  <p className="lac-game-tile-meta">Jacks or Better, Deuces Wild, Joker Poker</p>
                </div>
              </article>

              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">C</div>
                <span className="lac-game-tile-tag">Crash</span>
                <div>
                  <h3 className="lac-game-tile-name">Краш-игры</h3>
                  <p className="lac-game-tile-meta">Aviator, JetX, Space XY — быстрый формат</p>
                </div>
              </article>

              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">N</div>
                <span className="lac-game-tile-tag">Новинки</span>
                <div>
                  <h3 className="lac-game-tile-name">Новые релизы</h3>
                  <p className="lac-game-tile-meta">Свежие слоты каждую неделю</p>
                </div>
              </article>

              <article className="lac-game-tile">
                <div className="lac-game-tile-art" aria-hidden="true">T</div>
                <span className="lac-game-tile-tag">Турниры</span>
                <div>
                  <h3 className="lac-game-tile-name">Турнирные слоты</h3>
                  <p className="lac-game-tile-meta">Соревнуйтесь за призовой фонд каждую неделю</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Бонусы */}
        <section className="lac-section" id="bonuses">
          <div className="lac-container">
            <div className="lac-section-head">
              <span className="lac-section-eyebrow">Бонусная программа</span>
              <h2 className="lac-section-title">Бонусы La Casino — больше возможностей с первого спина</h2>
              <p className="lac-section-lead">
                Ля казино официальный сайт встречает новых игроков щедрым приветственным пакетом и продолжает радовать бонусами на постоянной основе. Чем активнее игра — тем выгоднее условия.
              </p>
            </div>

            <div className="lac-bonus-row">
              <article className="lac-bonus-card">
                <div className="lac-bonus-tier">Стартовый пакет</div>
                <div className="lac-bonus-amount">+150%</div>
                <p className="lac-bonus-desc">
                  К первому депозиту плюс 200 фриспинов на топовые слоты. Бонус активируется автоматически после регистрации.
                </p>
                <ul className="lac-bonus-list">
                  <li><span className="lac-bonus-check">+</span> Минимальный депозит от 500 ₽</li>
                  <li><span className="lac-bonus-check">+</span> Вейджер x35 на бонусные средства</li>
                  <li><span className="lac-bonus-check">+</span> Фриспины без отыгрыша на выигрыш</li>
                </ul>
                <a href="#start" className="lac-bonus-cta">Получить бонус</a>
              </article>

              <article className="lac-bonus-card">
                <div className="lac-bonus-tier">Кэшбэк</div>
                <div className="lac-bonus-amount">до 20%</div>
                <p className="lac-bonus-desc">
                  Еженедельный возврат части проигранных средств. Чем выше статус в программе лояльности — тем больше процент возврата.
                </p>
                <ul className="lac-bonus-list">
                  <li><span className="lac-bonus-check">+</span> Начисляется каждый понедельник</li>
                  <li><span className="lac-bonus-check">+</span> Без скрытых условий и ограничений</li>
                  <li><span className="lac-bonus-check">+</span> Действует на все игры каталога</li>
                </ul>
                <a href="#start" className="lac-bonus-cta">Активировать кэшбэк</a>
              </article>

              <article className="lac-bonus-card">
                <div className="lac-bonus-tier">VIP-клуб</div>
                <div className="lac-bonus-amount">5 уровней</div>
                <p className="lac-bonus-desc">
                  Персональный менеджер, эксклюзивные турниры, повышенные лимиты на вывод и подарки на день рождения.
                </p>
                <ul className="lac-bonus-list">
                  <li><span className="lac-bonus-check">+</span> Ускоренный вывод выигрышей</li>
                  <li><span className="lac-bonus-check">+</span> Закрытые акции и промокоды</li>
                  <li><span className="lac-bonus-check">+</span> Подарки и бонусы к праздникам</li>
                </ul>
                <a href="#start" className="lac-bonus-cta">Вступить в клуб</a>
              </article>
            </div>
          </div>
        </section>

        {/* Как начать */}
        <section className="lac-section lac-catalog" id="start">
          <div className="lac-container">
            <div className="lac-section-head">
              <span className="lac-section-eyebrow">Старт за четыре шага</span>
              <h2 className="lac-section-title">Как играть в La Casino — инструкция для новичков</h2>
              <p className="lac-section-lead">
                Начать играть в La Casino проще, чем кажется. Регистрация занимает пару минут, а первый спин можно сделать сразу после пополнения счёта. Никаких сложных форм и долгих проверок.
              </p>
            </div>

            <div className="lac-steps">
              <article className="lac-step">
                <div className="lac-step-num">01</div>
                <h3 className="lac-step-title">Регистрация</h3>
                <p className="lac-step-text">
                  Создайте аккаунт на официальном сайте La Casino или через рабочее зеркало. Достаточно указать email, придумать пароль и выбрать валюту счёта.
                </p>
              </article>

              <article className="lac-step">
                <div className="lac-step-num">02</div>
                <h3 className="lac-step-title">Подтверждение</h3>
                <p className="lac-step-text">
                  Подтвердите почту и пройдите быструю верификацию. Это занимает несколько минут и нужно для безопасности вашего счёта и быстрого вывода средств.
                </p>
              </article>

              <article className="lac-step">
                <div className="lac-step-num">03</div>
                <h3 className="lac-step-title">Депозит</h3>
                <p className="lac-step-text">
                  Пополните счёт любым удобным способом: банковская карта, СБП, электронный кошелёк или криптовалюта. Минимальная сумма — от 500 рублей.
                </p>
              </article>

              <article className="lac-step">
                <div className="lac-step-num">04</div>
                <h3 className="lac-step-title">Игра</h3>
                <p className="lac-step-text">
                  Выберите слот, рулетку или live-стол и нажмите «Играть». Ля казино онлайн запускается прямо в браузере — ничего скачивать не нужно.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="lac-section" id="faq">
          <div className="lac-container">
            <div className="lac-section-head">
              <span className="lac-section-eyebrow">Частые вопросы</span>
              <h2 className="lac-section-title">Вопросы об La Casino — коротко и по делу</h2>
              <p className="lac-section-lead">
                Собрали ответы на вопросы, которые задают чаще всего. Если ваш вопрос не здесь — напишите в поддержку, она работает круглосуточно.
              </p>
            </div>

            <div className="lac-faq-list">
              <article className="lac-faq-item">
                <h3 className="lac-faq-q">Что такое рабочее зеркало La Casino и зачем оно нужно?</h3>
                <p className="lac-faq-a">
                  Рабочее зеркало La Casino — это точная копия официального сайта, расположенная по альтернативному адресу. Оно нужно, когда основной домен недоступен из-за блокировок провайдера. Зеркало полностью синхронизировано с главным сайтом: баланс, бонусы, история игр — всё на месте. Играть через зеркало La Casino так же безопасно, как через основной адрес.
                </p>
              </article>

              <article className="lac-faq-item">
                <h3 className="lac-faq-q">La Casino официальный сайт — как отличить от подделки?</h3>
                <p className="lac-faq-a">
                  Настоящий La Casino официальный сайт всегда работает по защищённому протоколу HTTPS, имеет действующую лицензию в футере и предлагает только сертифицированные игры. Адрес сайта указан в наших контактах. Если сомневаетесь — перейдите по ссылке из этого лендинга, она ведёт на проверенный домен.
                </p>
              </article>

              <article className="lac-faq-item">
                <h3 className="lac-faq-q">Можно ли играть в La Casino с телефона?</h3>
                <p className="lac-faq-a">
                  Конечно. Ля казино онлайн отлично работает на смартфонах и планшетах. Сайт адаптирован под iPhone SE и старшие модели, открывается в любом современном браузере. Отдельное приложение скачивать не нужно — просто заходите на сайт и играйте.
                </p>
              </article>

              <article className="lac-faq-item">
                <h3 className="lac-faq-q">Сколько времени занимает вывод денег?</h3>
                <p className="lac-faq-a">
                  Заявки на вывод в La Casino обрабатываются в течение 15 минут в рабочее время. На электронные кошельки деньги приходят практически моментально, на банковские карты — от 15 минут до нескольких часов в зависимости от банка. Лимиты зависят от выбранной платёжной системы.
                </p>
              </article>

              <article className="lac-faq-item">
                <h3 className="lac-faq-q">Какие бонусы доступны новым игрокам?</h3>
                <p className="lac-faq-a">
                  Для новых игроков La Casino действует приветственный пакет: до 150% к первому депозиту и 200 фриспинов на популярные слоты. Дополнительно начисляется кэшбэк и доступны турниры с реальными призами. Все условия бонусов прозрачны — вейджер, сроки и список игр указаны заранее.
                </p>
              </article>

              <article className="lac-faq-item">
                <h3 className="lac-faq-q">Нужно ли проходить верификацию?</h3>
                <p className="lac-faq-a">
                  Базовая верификация в La Casino нужна для подтверждения возраста и защиты аккаунта. Процедура простая: загрузить фото документа и подтвердить адрес. После этого открывается полный доступ к выводу средств и участию в акциях. Обычно проверка занимает не больше суток.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="lac-section">
          <div className="lac-container">
            <div className="lac-cta-block">
              <h2 className="lac-cta-title">Готовы испытать удачу в La Casino?</h2>
              <p className="lac-cta-text">
                Регистрация занимает пару минут, а первый бонус уже ждёт. Играть в La Casino можно прямо сейчас — на компьютере или с телефона, через официальный сайт или рабочее зеркало.
              </p>
              <a href="#start" className="lac-btn-primary">Начать играть в La Casino</a>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="lac-footer">
        <div className="lac-container">
          <div className="lac-footer-grid">
            <div className="lac-footer-about">
              <div className="lac-footer-brand">
                <span className="lac-brand-mark">L</span>
                <span>La Casino</span>
              </div>
              <p className="lac-footer-text">
                La Casino официальный сайт — современная игровая платформа с лицензией, быстрыми выплатами и честными правилами. Играть в La Casino можно онлайн с любого устройства.
              </p>
            </div>

            <div>
              <h4 className="lac-footer-title">Разделы</h4>
              <ul className="lac-footer-list">
                <li><a href="#features">Преимущества</a></li>
                <li><a href="#games">Каталог игр</a></li>
                <li><a href="#bonuses">Бонусы</a></li>
                <li><a href="#start">Как начать</a></li>
                <li><a href="#faq">Вопросы и ответы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="lac-footer-title">Контакты</h4>
              <ul className="lac-footer-list">
                <li><a href="mailto:support@la15casino.vercel.app">support@la15casino.vercel.app</a></li>
                <li><a href="#">Онлайн-чат 24/7</a></li>
                <li><a href="#">Telegram-канал</a></li>
                <li><a href="#">Партнёрская программа</a></li>
              </ul>
            </div>
          </div>

          <div className="lac-footer-tags" aria-label="Ключевые фразы для поиска">
            <a href="#features" className="lac-footer-tag">#la casino</a>
            <a href="#features" className="lac-footer-tag">#la casino зеркало</a>
            <a href="#start" className="lac-footer-tag">#la casino играть</a>
            <a href="#features" className="lac-footer-tag">#la casino официальный</a>
            <a href="#features" className="lac-footer-tag">#la casino официальный сайт</a>
            <a href="#features" className="lac-footer-tag">#ла казино</a>
            <a href="#features" className="lac-footer-tag">#ля казино</a>
            <a href="#features" className="lac-footer-tag">#ля казино зеркало</a>
            <a href="#features" className="lac-footer-tag">#ля казино зеркало рабочее</a>
            <a href="#start" className="lac-footer-tag">#ля казино играть</a>
            <a href="#features" className="lac-footer-tag">#ля казино онлайн</a>
            <a href="#features" className="lac-footer-tag">#ля казино официальный</a>
            <a href="#features" className="lac-footer-tag">#ля казино официальный сайт</a>
          </div>

          <div className="lac-footer-bottom">
            <div>© 2026 La Casino. Все права защищены. Играйте ответственно. 18+</div>
            <div className="lac-footer-bottom-links">
              <a href="#">Правила и условия</a>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Ответственная игра</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
