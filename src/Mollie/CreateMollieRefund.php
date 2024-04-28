<?php

declare(strict_types=1);

namespace Laravel\Cashier\Mollie;

use Laravel\Cashier\Contracts\ProvidesOauthInformation;
use Laravel\Cashier\Mollie\Contracts\CreateMollieRefund as Contract;
use Laravel\Cashier\Mollie\Contracts\GetMolliePayment;
use Mollie\Api\Resources\Refund;
use Mollie\Api\MollieApiClient as Mollie;

class CreateMollieRefund extends BaseMollieInteraction implements Contract
{
    /**
     * @var \Laravel\Cashier\Mollie\Contracts\GetMolliePayment
     */
    protected GetMolliePayment $getMolliePayment;

    public function __construct(Mollie $mollie, GetMolliePayment $getMolliePayment)
    {
        parent::__construct($mollie);

        $this->getMolliePayment = $getMolliePayment;
    }

    public function execute(string $paymentId, array $payload, ?ProvidesOauthInformation $model = null): Refund
    {
        $this->setAccessToken($model);

        $payment = $this->getMolliePayment->execute($paymentId, [], $model);

        if ($model?->isMollieTestmode()) {
            $payload['testmode'] = true;
        }

        /** @var Refund $refund */
        $refund = $payment->refund($payload);

        return $refund;
    }
}
