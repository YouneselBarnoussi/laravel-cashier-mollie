<?php

declare(strict_types=1);

namespace Laravel\Cashier\Mollie;

use Laravel\Cashier\Contracts\ProvidesOauthToken;
use Money\Money;

class GetMollieMethodMinimumAmount extends BaseMollieInteraction implements Contracts\GetMollieMethodMinimumAmount
{
    public function execute(string $method, string $currency, ?ProvidesOauthToken $model = null): Money
    {
        $this->setAccessToken($model);

        $payload = [
            'currency' => $currency,
            'testmode' => ! app()->environment('production'),
        ];

        if ($profile = $model->getMollieProfile()) {
            $payload['profileId'] = $profile;
        }
        
        $minimumAmount = $this->mollie
            ->methods
            ->get($method, $payload)
            ->minimumAmount;

        return mollie_object_to_money($minimumAmount);
    }
}
