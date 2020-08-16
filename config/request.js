export default {
  "tabsLink": {
    "checkout/simplecheckout": "Simple/Checkout",
    "account/simpleregister": "Simple/Register",
    "account/simpleedit": "Simple/Edit",
    "account/simpleaddress": "Simple/Address",
    "account/register": "Default/Register",
    "account/edit": "Default/Edit",
    "account/address": "Default/Address"
  },
  "tabsData": {
    "checkout/simplecheckout": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": true,
      "data": {
        "customer": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "[name='customer[firstname]']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "[name='customer[lastname]']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "[name='customer[email]']",
            "helper_keys": "value",
            "reload": "reloadAll();",
            "status": "off"
          }
        ],
        "payment_address": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "[name='payment_address[firstname]']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "[name='payment_address[lastname]']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "reloadAll();",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "[name='payment_address[region]']",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "[name='payment_address[city]']",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "[name='payment_address[address_1]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "[name='payment_address[address_2]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "[name='payment_address[postal_code]']",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ],
        "shipping_address": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "[name='shipping_address[firstname]']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "[name='shipping_address[lastname]']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "reloadAll();",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "[name='shipping_address[region]']",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "[name='shipping_address[city]']",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "[name='shipping_address[address_1]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "[name='shipping_address[address_2]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "[name='shipping_address[postal_code]']",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ]
      }
    },
    "account/simpleregister": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": false,
      "data": {
        "register": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "[name='register[firstname]']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "[name='register[lastname]']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "[name='register[email]']",
            "helper_keys": "value",
            "reload": "reloadAll();",
            "status": "off"
          },
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "reloadAll();",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "[name='register[region]']",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "[name='register[city]']",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "[name='register[address_1]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "[name='register[address_2]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "[name='register[postal_code]']",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ]
      }
    },
    "account/simpleedit": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": false,
      "data": {
        "edit": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "[name='edit[firstname]']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "[name='edit[lastname]']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "[name='edit[email]']",
            "helper_keys": "value",
            "reload": "reloadAll();",
            "status": "off"
          }
        ]
      }
    },
    "account/simpleaddress": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": false,
      "data": {
        "edit": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "[name='address[firstname]']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "[name='address[lastname]']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "[name='address[email]']",
            "helper_keys": "value",
            "reload": "reloadAll();",
            "status": "off"
          },
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "[name='register[region]']",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "[name='register[city]']",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "[name='register[address_1]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "[name='register[address_2]']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "[name='register[postal_code]']",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ]
      }
    },
    "checkout/checkout": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": false,
      "data": {
        "payment_address": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "#collapse-payment-address [name='firstname']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "#collapse-payment-address [name='lastname']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "#collapse-payment-address [name='email']",
            "helper_keys": "value",
            "reload": "",
            "status": "off"
          },
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "#collapse-payment-address [name='zone_id']",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "#collapse-payment-address [name='city']",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "#collapse-payment-address [name='address_1']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "#collapse-payment-address [name='address_2']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "#collapse-payment-address [name='postcode']",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ],
        "shipping_address": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "#collapse-shipping-address [name='firstname']",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "#collapse-shipping-address [name='lastname']",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "#collapse-shipping-address [name='zone_id']",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "#collapse-shipping-address [name='city']",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "#collapse-shipping-address [name='address_1']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "#collapse-shipping-address [name='address_2']",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "#collapse-shipping-address [name='postcode']",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ]
      }
    },
    "account/register": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": false,
      "data": {
        "account": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "#input-firstname",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "#input-lastname",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "#input-email",
            "helper_keys": "value",
            "status": "off"
          }
        ],
        "address": [
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "#input-zone",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "#input-city",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "#input-address-1",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "#input-address-2",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "#input-postcode",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ]
      }
    },
    "account/edit": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": false,
      "data": {
        "edit": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "#input-firstname",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "#input-lastname",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "#input-email",
            "helper_keys": "value",
            "reload": "reloadAll();",
            "status": "off"
          }
        ]
      }
    },
    "account/address": {
      "text_status": "Форма/JavaScript/Выкл настройки",
      "status": "off",
      "javascript": "",
      "css": "",
      "tab_active": false,
      "data": {
        "edit": [
          {
            "label": "firstname",
            "group_type": "fio",
            "awaiting": "#input-firstname",
            "helper_keys": "name patronymic",
            "prefetch": "return {query: '', parts: ['NAME',  'PATRONYMIC']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "lastname",
            "group_type": "fio",
            "awaiting": "#input-lastname",
            "helper_keys": "surname",
            "prefetch": "return {query: '', parts: ['SURNAME']}",
            "single": "true",
            "status": "off"
          },
          {
            "label": "email",
            "group_type": "email",
            "awaiting": "#input-email",
            "helper_keys": "value",
            "status": "off"
          },
          {
            "label": "parent_input",
            "hint": "text_hint",
            "group_type": "address",
            "awaiting": "",
            "clear": "false",
            "newElement": "{tag: 'div',props: {},child: '<input type='text' class='suggestions-input' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'><div class='suggestions-wrap'><ul class='js_suggestions'></ul></div>'}",
            "reload": "",
            "onSelected": "",
            "status": "off"
          },
          {
            "label": "region",
            "group_type": "address",
            "awaiting": "#input-zone",
            "clear": "false",
            "prefetch": "",
            "helper_keys": "region",
            "status": "off"
          },
          {
            "label": "city",
            "group_type": "address",
            "awaiting": "#input-city",
            "clear": "false",
            "prefetch": "return { locations: [ JSON.parse(target.getAttribute('data-dadata')) ], from_bound: { 'value': 'city' }, to_bound: { 'value': 'city' }, restrict_value: true, query: '' }",
            "callback": "let res = (helper('city_fias_id', suggest, true) || helper('area_fias_id', suggest, true) || helper('region_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "city_with_type",
            "status": "off"
          },
          {
            "label": "address_1",
            "group_type": "address",
            "awaiting": "#input-address-1",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "address_2",
            "group_type": "address",
            "awaiting": "#input-address-2",
            "clear": "false",
            "prefetch": "return { 'locations': [ JSON.parse(target.getAttribute('data-dadata')) ], 'from_bound': {'value': 'street',}, 'to_bound': {'value': 'flat',}, 'restrict_value': true, 'query': '' }",
            "callback": "let res = (helper('settlement_fias_id', suggest, true) || helper('city_fias_id', suggest, true)); element.setAttribute('data-dadata', res);",
            "helper_keys": "street_with_type, house_type.house, block_type-block, flat_type.flat",
            "status": "off"
          },
          {
            "label": "postcode",
            "group_type": "address",
            "awaiting": "#input-postcode",
            "clear": "false",
            "helper_keys": "postal_code",
            "status": "off"
          }
        ]
      }
    }
  },
  "breadcrumbs": [
    {
      "href": "#",
      "title": "Главная"
    }, {
      "href": "#",
      "title": "Модули"
    }, {
      "href": "#",
      "title": "Подсказки [Dadata Pro]"
    }
  ],
  "back_page_modules": "",
  "text_button_save": "Сохранить настройки",
  "text_back_page_modules": "Вернуться в модули",
  "action": "",
  "header_title": "Подсказки [Dadata Pro]",
  "text_apikey": "API key",
  "apikey": "",
  "text_apikey_notification": "Получить api key можно перейдя по ссылке <a href='' target='_blank'>получить ключ</a>",
  "text_status": "Статус модуля",
  "status": 1,
  "activeItem": "checkout/simplecheckout",
  "cooperate": ""
};