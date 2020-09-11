function htmlEditor () {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attrs, $ctrl) {
            // view -> Model
            $element.on('input', function (event) {         // event listener on element // input referes to the input initiated by "contenteditable"
                $ctrl.$setViewValue(event.target.innerHTML);    //  we are setting a view value, $ctrl is the default model controller linked to the ngModel that we have declared in the index.html
            });
            // Model -> View
            $ctrl.$render = function () {
                $element.html($ctrl.$modelValue); // $element.html is the jquery way of writting: $element[0].innerHTML 
            };
            $ctrl.$setViewValue($element[0].innerHTML);
        }
    };
};

angular
    .module('app')
    .directive('htmlEditor', htmlEditor)
