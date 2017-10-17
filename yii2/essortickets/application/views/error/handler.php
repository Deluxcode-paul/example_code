<?php
/**
 * @var \yii\web\View $this
 * @var string $name
 * @var string $message
 * @var Exception $exception
 * @version 1.0
 */

$this->title = $name;
?>
<div class="site-error">

    <h1><?= yii\helpers\Html::encode($this->title) ?></h1>

    <div class="alert alert-danger">
        <?= nl2br(yii\helpers\Html::encode($message)) ?>
    </div>

    <p>
        <?= \Yii::t('app', 'The above error occurred while the Web server was processing your request.') ?>
    </p>
    <p>
        <?= \Yii::t('app', 'Please contact us if you think this is a server error. Thank you.') ?>
    </p>

</div>
