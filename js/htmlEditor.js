function htmlEditor () {
    return {
        link: function ($scope, $element, $attrs) {
            console.log($element);
        }
    };
};

angular
    .module('app')
    .directive('htmlEditor', htmlEditor)