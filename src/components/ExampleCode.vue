<template>
  <div>
    <article class="message">
      <div class="message-body">
        Выберите страницу настроек или добавьте новую!
      </div>
    </article>
    <div class="content is-small">
      <p>Слева распологаются предустановленные настройки. Можно переключаться на каждой вкладке в три режима:</p>
      <ol type="1">
        <li>Default - предустановленные настройки. Возвращаемые ключи - это ключи в ответе дадаты. Полный список ключей можете увидеть щелкнув справа на нужную группу</li>
        <li>Javascript - возможность использовать модуль по полной. Этот вариант подойдет если вы понимаете как работает javascript</li>
        <li>Off - выключает вкладку</li>
      </ol>
      <blockquote>В режимах [Default, Javascript], вы можете увидеть вверху уведомление о том что route найден или не найден. Просто добавьте нужный route если он не найден и вы решили использовать модуль на данной странице.</blockquote>
      <br>
      <p>Так же слева имеется инпут. В котором можно добавить route страницы контроллера и привязать модуль к ней. Заметьте, что в данном режиме нету предустановленных настроек. Все потому что я не могу предугадать все варианты.</p>
      <br>
      <p>Если вы не собираетесь использовать какую либо из вкладок. То просто выключите ее.</p>
      <h3>JavaScript Example Settings</h3>
      <pre :class="{'toggle_example_code': exampleCode}">UserDadata({
  type: 'address',
  delay: 777,
  debug: false,
  element: /*'#selector'*/function(helper) {
    return {
      before: '#el1',
      newElement: helper.create(helper.elementDefault),
    };
  },
  reload: function(store, helper) {

  },
  onSelected: function(suggest, helper) {

  },
  queue: /* function(suggest, helper) { } */[
    {
      awaiting: '#region',
      prefetch: function(target) {
        return {
          'from_bound': {'value': 'region'},
          'to_bound': {'value': 'region'},
          'query': '',
        };
      },
      callback: function(suggest, helper, element) {
        return helper('region_type.region', suggest);
      },
    }, {
      awaiting: '#city',
      clearInput: true,
      prefetch: function(target) {
        return {
          'locations': [
            JSON.parse(target.getAttribute('data-dadata')),
          ],
          'from_bound': {
            'value': 'city',
          },
          'to_bound': {
            'value': 'city',
          },
          'restrict_value': true,
          'query': '',
        };
      },
      callback: function(suggest, helper, element) {
        let t = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true));
        element.setAttribute('data-dadata', t);
        return helper('city_with_type', suggest);
      },
    }, {
      awaiting: '#address',
      prefetch: function(target) {
        return {
          'locations': [
            JSON.parse(target.getAttribute('data-dadata')),
          ],
          'from_bound': {
            'value': 'street',
          },
          'to_bound': {
            'value': 'flat',
          },
          'restrict_value': true,
          'query': '',
        };
      },
      callback: function(suggest, helper, element) {
        let t = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true));
        element.setAttribute('data-dadata', t);
        return helper('street_with_type, house_type.house, block_type-block, flat_type.flat', suggest);
      },
    }, {
      awaiting: '#postal_code',
      callback: function(suggest, helper) {
        return helper('postal_code', suggest);
      },
    },
  ],
});

UserDadata({
  type: 'fio',
  delay: 777,
  element: '#el2'/* function (helper) {
   return {
   before: '#el',
   newElement: helper.create(helper.elementDefault)
   }
   } */,
  onSelected: function(suggest, helper) {

  },
  queue: /* function(suggest, helper) { } */[
    {
      awaiting: '#name',
      callback: function(suggest, helper) {
        return helper('name', suggest);
      },
    }, {
      awaiting: '#firstname',
      callback: function(suggest, helper) {
        return helper('surname', suggest);
      },
    }, {
      awaiting: '#lastname',
      callback: function(suggest, helper) {
        return helper('patronymic', suggest);
      },
    },
  ],
});</pre>
      <button type="button" class="button is-small is-fullwidth" @click.prevent="exampleCodeToggle">Развернуть/Свернуть</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExampleCode',
    data: () => {
      return {
        exampleCode: true
      };
    },
    methods: {
      exampleCodeToggle() {
        this.exampleCode = !this.exampleCode;
      }
    }
  };
</script>