// Content for roadmap.html, kept separate from the markup so updating the
// plan is just editing this array - no HTML/CSS to touch.
//
// tag: 'now' (в работе сейчас) | 'next' (следующее) | 'later' (в очереди) | 'idea' (идея)
// Order here is render order - top to bottom is priority, edit by reordering.
window.MFCHAT_ROADMAP = {
  changelogUrl: 'https://github.com/mfreddi/chat/blob/main/CHANGELOG.md',

  sections: [
    {
      title: 'Своя система событий и действий',
      sub: 'замена Streamer.bot',
      cards: [
        {
          title: 'Бот-команды в чате',
          tag: 'later',
          body: '<code>!uptime</code>, <code>!so</code> и свои команды — от отдельного бот-аккаунта, а не от лица стримера, чтобы не путать зрителей и не тратить его лимиты.'
        }
      ]
    },
    {
      title: 'Донаты',
      cards: [
        {
          title: 'Boosty',
          tag: 'later',
          body: 'И подписки, и разовые донаты — родная интеграция вместо стороннего виджета.'
        },
        {
          title: 'Tribute',
          tag: 'later',
          body: 'API уже изучено и проверено, ждёт технической инфраструктуры перед стартом разработки.'
        },
        {
          title: 'Ещё площадки на примете',
          tag: 'idea',
          body: 'Donatty, Destream, ODA, StreamElements, StreamLabs — смотрим, у кого API попроще. Donatello — если будет украиноязычная аудитория.'
        }
      ]
    }
  ],

  ideas: [
    { title: 'Рейды на VK Live', desc: 'сейчас рейды умеет отслеживать только Twitch' },
    { title: 'Модерация из одного окна', desc: 'таймаут/бан сразу по всем площадкам' },
    { title: 'Авто-клипы', desc: 'сохранение реплея на крупный донат/событие' },
    { title: 'Визуальный редактор оверлеев', desc: 'перетаскивание элементов вместо готовых пресетов' },
    { title: 'Мастер первого запуска', desc: 'подключить все площадки за один проход' },
    { title: 'Stream Deck', desc: 'поддержка железных макро-клавиш' },
    { title: 'Импорт из Streamer.bot', desc: 'перенос уже настроенных триггеров' },
    { title: 'MemeAlerts: стикеры', desc: 'события стикеров в TTS/чат/эффекты' }
  ]
}
