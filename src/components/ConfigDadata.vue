<template>
    <textarea name="" id="" cols="30" rows="10">
UserDadata({
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
});
    </textarea>
</template>