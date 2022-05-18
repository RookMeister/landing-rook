
export const leftSide = {
	information: {
		titleBlock: 'Информация',
		status: 'Не ищу',
		avatar: '/resume/avatar.jpg',
		bg: '/resume/frontend.png',
		name: 'Хмель Артём',
		title: 'Frontend-разработчик, Vue JS',
		array: [
			{ title: 'Местоположение', text: 'Владивосток' },
			{ title: 'Опыт', text: '4+ года' },
			{ title: 'Релокация', text: 'Москва, Санкт-Петербург' }
		]
	},
	skills: {
		titleBlock: 'Навыки',
		array: ['HTML/CSS', 'JavaScript', 'Typescript', 'Vue', 'Vue Router', 'Vuex', 'Nuxt', 'Node.js', 'Git', 'Telegraf']
	}
}

export const rightSide = {
	about: {
		titleBlock: 'Обо мне',
		bio: 'Я занимаюсь frontend разработкой уже 5 лет и всё это время я работаю со Vue Js. Рассматриваю предложения связанные с экосистемой Vue. Есть опыт и backend разработки с использованием nodejs и mongo. Был опыт в построении UI Kit. Есть опыт связанный с Telegram Bot. Готов к перезду (предпочитаемый вариант). На данный момент хочу и дальше развиваться как frontend специалист. Люблю делать интерфейсы.',
		mail: 'artemhmelwork@gmail.com',
		socials: [
			{ service: 'telegram', link: 'https://t.me/RookMeister' },
			{ service: 'twitter', link: 'https://twitter.com/RookMeister6' },
			{ service: 'github', link: 'https://github.com/RookMeister' },
			{ service: 'gitlab', link: 'https://gitlab.com/RookMeister' },
		],
		blocks: [
			{ title: 'Резюме', slug: 'resume' },
			{ title: 'Проекты', slug: 'project' },
			// { title: 'Блог', slug: 'blog' }
		],
		resume: [
			{
				titleBlock: 'Опыт', is: 'resume', slug: 'expirience',
				blocks: [
					{
						logoUrl: 'https://kt.tc/images/logo/android/android-chrome-192x192.svg', nameSubject: 'КТТС Маркет', location: 'Владивосток', title: 'Full-stack разработчик',
						descriptions: [
							{ title: '', text: 'Был одним из основным разработчиком платформы КТТС, площадка объявлений игровых услуг.' },
							{ title: 'Достижения', text: '<ul class="list-disc ml-5"><li>Занимался всем с нуля.</li><li>Участвовал в написании бекенд методов</li><li>Был написан чат (Бекенд, Фронтенд) с использованием Mongo и WebSokets</li></ul>' },
							{ title: 'Технологии', text: 'Vue, Nodejs, Mongo, Typescript, Nuxt, Koa, Redis, WebSokets, Docker' }
						],
						period: 'Май 2021 — Январь 2022', timeJob: 'Part time'
					},
					{
						logoUrl: 'https://hyperauto.ru/hyperauto-favicon.svg', nameSubject: 'ООО Сократ маркетинг', location: 'Владивосток', title: 'Веб-разработчик',
						descriptions: [
							{ title: 'Достижения', text: '<ul class="list-disc ml-5"><li>Опыт в работе с Docker и Typyscript</li><li>Разработал гибкий компонент карусели.</li><li>Разработал UI Kit с множеством базовых компонентов на базе Storybook по макетам в Figma</li><li>Занимался архитектурой нового СПА (Nuxt) приложения сайта hyperauto.ru с использованием SSR и в приоритете на мобильной версии.</li></ul>' },
							{ title: 'Технологии', text: 'Vue, Typescript, Nuxt, Docker' }
						], period: 'Июнь 2019 — по настоящее время', timeJob: 'Full time'
					},
					{
						logoUrl: 'https://sun5-3.userapi.com/s/v1/ig2/bhzXxDQZtohU-YsHtKjKdEcUxynxxmRjrRxf0mdnm3ta99SYt0z96sEDn3p9fwFQpsMpIFbOlcA7JBCJXe0Amuyz.jpg?size=50x50&quality=95&crop=0,0,600,600&ava=1', nameSubject: 'СКБ Приморья Примсоцбанк', location: 'Владивосток', title: 'Веб-программист',
						descriptions: [
							{ title: 'Достижения:', text: '<ul class="list-disc ml-5"><li>Был написан виджет калькулятора для расчёта депозитных вкладов и ипотечных кредитов.</li><li>Написано приложение "Телефонная книга". Внутренний сервис через который можно было найти любого сотрудника по ФИО или принадлежности к отделу и посмотреть краткую информацию о сотруднике с фотографией, в частности номер рабочего телефона.</li></ul>' }
						], period: 'Февраль 2018 — июнь 2019', timeJob: 'Full time'
					}
				]
			},
			{
				titleBlock: 'Образование', is: 'resume', slug: 'education',
				blocks: [
					{
						logoUrl: 'https://www.dvfu.ru/upload/medialibrary/772/odnocvet.png', nameSubject: 'ДВФУ', location: 'Владивосток', title: 'Магистратура', period: 'Сентябрь 2015 — Июнь 2017',
						descriptions: [
							{ title: '', text: 'Дальневосточный федеральный университет, Школа естественных наук, Прикладная математика и информатика' }
						]
					},
					{
						logoUrl: 'https://www.dvfu.ru/upload/medialibrary/772/odnocvet.png', nameSubject: 'ДВФУ', location: 'Владивосток', title: 'Бакалавриат', period: 'Сентябрь 2011 — Июнь 2015',
						descriptions: [
							{ title: '', text: 'Дальневосточный федеральный университет, Школа естественных наук, Математика и компьютерные науки' }
						]
					}
				]
			}
		],
		project: [
			{
				titleBlock: 'Проекты', is: 'project', slug: 'project',
				blocks: [
					{
						logoUrl: 'https://kt.tc/images/logo/android/android-chrome-192x192.svg', nameSubject: 'E-commerce', location: 'Разработчик', title: 'КТТС Маркет', link: 'https://kt.tc', descriptions: [{ title: '', text: 'КТТС Маркет - Маркетплейс для геймеров' }]
					}
				]
			}
		]
	}
}