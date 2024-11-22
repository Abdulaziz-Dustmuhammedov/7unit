//
import Accordion from "../accordion";
import "./index.css";

const OurWork = () => {
  return (
    <div className="our-work" id="our-work">
      <div className="our-work-folder py-12 md:py-16 lg:py-24">
        <div
          className="our-work-wrap"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="our-work-text pb-3">Как мы работаем?</p>

          <Accordion
            title={`
            1. Планирование и <br />
            изучение проекта
            `}
            description=" Мы начинаем с глубокого анализа ваших целей и задач, чтобы создать
            проект, идеально соответствующий вашим потребностям. На этом этапе
            мы разрабатываем стратегию и план действий, чтобы обеспечить
            успешную реализацию."
          />
        </div>

        <div
          className="our-work-wrap"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Accordion
            title={`2. UX/UI Дизайн`}
            description=" Создаем удобный и привлекательный дизайн, ориентированный на
             потребности пользователей. Наши специалисты тщательно
             прорабатывают каждый элемент интерфейса, чтобы обеспечить
             максимальную функциональность и визуальную эстетику."
          />
        </div>

        <div
          className="our-work-wrap"
          data-aos="fade-right"
          data-aos-duration="1400"
        >
          <Accordion
            title={`3. Разработка`}
            description="Переходим к реализации проекта, используя современные технологии и
          лучшие практики разработки. Мы обеспечиваем надежность и
          производительность вашего веб-ресурса, интегрируя все необходимые
          функции."
          />
        </div>

        <div
          className="our-work-wrap"
          data-aos="fade-left"
          data-aos-duration="1600"
        >
          <Accordion
            title={`4. Тестирование`}
            description="Проводим всестороннее тестирование проекта, чтобы убедиться в его
          корректной работе. На этом этапе мы устраняем любые ошибки и
          гарантируем стабильность и безопасность вашего веб-решения."
          />
        </div>

        <div
          className="our-work-wrap"
          data-aos="fade-right"
          data-aos-duration="1800"
        >
          <Accordion
            title={`5. Гарантийный период`}
            description="После запуска проекта предоставляем гарантийную поддержку,
          оперативно устраняя возможные проблемы. Мы обеспечиваем стабильную
          работу вашего ресурса и готовы помочь в случае необходимости."
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
