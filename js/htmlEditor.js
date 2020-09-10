function htmlEditor () {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attrs, $ctrl) {
            $element.on('input', function (event) {         // event listener on element // input referes to the input initiated by "contenteditable"
                $ctrl.$setViewValue(event.target.innerHTML);    //  we are setting a view value
            });
        }
    };
};

angular
    .module('app')
    .directive('htmlEditor', htmlEditor)
