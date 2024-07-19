var PaymentVerificationViewModel = function (paymentMethodId, paymentId, externalTransactionId, status) {
    var self = this;

    function init() {
        if (status != 'successful') {
            alert('payment unsuccessful!');
        } else {
            $.blockUI();

            $.ajax({
                url: '/api/v3/payments/verify-payment',
                type: 'post',
                contentType: 'application/json',
                data: ko.toJSON({
                    paymentMethodId: paymentMethodId,
                    paymentId: paymentId,
                    externalTransactionId: externalTransactionId,
                    status: status
                }),
                success: response => {
                    console.log(response);

                    if (response.isVerified) {
                        if (response.serviceType == 'marketplace') {
                            $.blockUI();

                            $.ajax({
                                url: `/api/v3/marketplace/transactions/${response.transactionGuid}/brief`,
                                type: 'get',
                                success: res => {
                                    if (res.returnUrl != null && res.returnUrl != '') {
                                        window.location.href = res.returnUrl;
                                    } else {
                                        alert("Your payment is Now Complete");
                                    }
                                }
                            });
                        } else if (response.serviceType == 'paymentinvite') {
                            alert("Your payment is Now Complete");
                        }
                    }
                },
                error: xhr => { console.log(xhr); },
                complete: _ => { $.unblockUI(); }
            });
        }
    }
    init();
}