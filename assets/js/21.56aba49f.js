(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{299:function(a,t,e){"use strict";e.r(t);var s=e(17),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"upgrade-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-guide"}},[a._v("#")]),a._v(" Upgrade Guide")]),a._v(" "),t("h2",{attrs:{id:"preparations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[a._v("#")]),a._v(" Preparations")]),a._v(" "),t("p",[a._v("If you're using "),t("code",[a._v("receipt_old.blade.php")]),a._v(", make sure to either publish it to your views directory before upgrading, or switch to the default "),t("code",[a._v("receipt.blade.php")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"upgrading-to-2-0-from-1-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-2-0-from-1-x"}},[a._v("#")]),a._v(" Upgrading To 2.0 From 1.x")]),a._v(" "),t("p",[a._v("Remove the "),t("code",[a._v("laravel/cashier-mollie")]),a._v(" dependency from your "),t("code",[a._v("composer.json")]),a._v(".")]),a._v(" "),t("p",[a._v("Once you have removed  the "),t("code",[a._v("laravel/cashier-mollie")]),a._v(", you may install Laravel Cashier Mollie using Composer:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require mollie/laravel-cashier-mollie "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^2.0"')]),a._v("\n")])])]),t("p",[a._v("Once you have pulled in the package:")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Run "),t("code",[a._v("php artisan cashier:update")]),a._v(". If you want to put the application in maintenance mode, lock cashier's webhooks and lock "),t("code",[a._v("cashier:run")]),a._v(", then use: "),t("code",[a._v("php artisan cashier:update --maintenance")]),a._v(".")])]),a._v(" "),t("li",[t("p",[a._v("If you're using "),t("code",[a._v("AddGenericOrderItem")]),a._v(" or "),t("code",[a._v("AddBalance")]),a._v(", you'll need to update the "),t("code",[a._v("create()")]),a._v(" calls.")])])]),a._v(" "),t("ul",[t("li",[a._v("Find "),t("code",[a._v("AddGenericOrderItem::create([...])")]),a._v(" usage and add "),t("code",[a._v("$quantity")]),a._v(". The new constructor signature is")])]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("__construct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("Model")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$owner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("Money")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$unitPrice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$quantity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[a._v("string")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$roundingMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Money")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ROUND_HALF_UP")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("Find "),t("code",[a._v("AddBalance::create([...])")]),a._v(" usage and add "),t("code",[a._v("$quantity")]),a._v(". The new constructor signature is")])]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("__construct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("Model")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$owner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("Money")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$subtotal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$quantity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[a._v("string")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Run the migrations "),t("code",[a._v("php artisan migrate")]),a._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);