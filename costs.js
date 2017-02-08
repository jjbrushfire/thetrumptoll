var CostsViewModel = function() {
    var self = this;
    self.costs = ko.observableArray([]);

    self.formattedTotal = ko.pureComputed(function (){
        var total = self.costs().reduce(function (x, y){
            return x + y.cost();
        }, 0);

        return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    });

    data.forEach(function(item) {
            this.costs.push(new CostViewModel(item));
    }, this);
};
 
var CostViewModel = function(item) {
    var self = this;
    self.date = ko.observable(item.date);
    self.title = ko.observable(item.title);
    self.cost = ko.observable(item.cost);
    self.link = ko.observable(item.link);

    self.formattedCost = ko.pureComputed(function (){
        return self.cost().toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    });
};
