var bank = 0;
var bank_withdrawAmount = "0";
var bank_depositAmount = "0";
var bank_initialAmount="0";
var bank_withdraw = function (amount) {
    //Check if there is money

var bank_deposit = function (amount) {
    //Check if there is money
   
var bank_initial = function (amount) {
    alert("You have 1000000" + bank_deposit_amount + " in your bank.");
    $.cookie("bankMoney", money, {
        expires: 1
    });
    alert($.cookie("example"));
};

//business logic
function info(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  
  function service(initial , deposit, withdraw) {
    this.initial = initial;
    this.deposit = deposit;
    this.withdraw= withdraw;
  }
  
  info.prototype.new_info = function() {
    return this.firstName + " " + this.lastName;
  }
  
  service.prototype.new_service = function() {
    return this.initial + ", " + this.deposit + ", " + this.withdraw;
  }
  
  function info_service() {
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input.withdraw").val("");
      $("input.deposit").val("");
      $("input.initial").val("");
  }
  
  // user interface logic
  $(account).info(function() {
   
    $("form#bank_deposit").balance(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var newContact = new info(inputtedFirstName, inputtedLastName);
  
      $(".service").each(function() {
        var inputtedinitial = $(this).find("input.initial amount").val();
        var inputteddeposit = $(this).find("input.deposit amount").val();
        var inputtedwithdraw = $(this).find("input.withdraw amount").val();
        var service = new service(inputtedinitial, inputteddeposit, inputtedwithdraw)
        info.service.push(service)
      });
  
      $(".info").last().click(function() {
        $("#show-info").show();
        $("#show-info h2").text(info.fullName());
        $(".first-name").text(info.firstName);
        $(".last-name").text(info.lastName);
        info.service.forEach(function(service) {
        });
    })
})
  