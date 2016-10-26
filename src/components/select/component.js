let Component = {
  bindings: {
    ngModel: '=',
    options: '<',
    option: '@',
    value: '@',
    placeholder: '@?',
    onUpdate: "&?"
  },
  template: `
    <div class="dropdown gmd">
      <button class="btn btn-default gmd dropdown-toggle" type="button" id="gmdSelect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <span data-ng-bind="$ctrl.selected"></span>
        <span data-ng-bind="$ctrl.placeholder" data-ng-hide="$ctrl.ngModel" class="placeholder"></span>
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="gmdSelect">
        <li>
          <a data-ng-click="$ctrl.unselect()" data-ng-bind="$ctrl.placeholder"></a>
        </li>
        <li data-ng-repeat="option in $ctrl.options">
          <a data-ng-click="$ctrl.select(option)" data-ng-bind="option[$ctrl.option] || option" data-ng-class="{active: $ctrl.ngModel == option}"></a>
        </li>
      </ul>
    </div>
  `,
  controller: function() {
    let ctrl = this
    ctrl.select = option => {
      ctrl.selected = option[ctrl.option] || option
      ctrl.ngModel = (ctrl.value) ? option[ctrl.value] : option
      if (ctrl.onUpdate) ctrl.onUpdate({option: option})
    }
    ctrl.unselect = () => ctrl.ngModel = undefined
  }
}

export default Component