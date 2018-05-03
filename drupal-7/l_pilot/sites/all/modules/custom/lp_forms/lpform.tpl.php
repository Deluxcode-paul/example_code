<?php echo $font_link; ?>
<div style="padding-top:10px;" >
<h5 <?php if (!empty($title_color)) {
    ?> style="color:<?php echo $title_color; ?>;"  <?php
} ?>><?php echo $title; ?></h5>
<hr>
<?php echo $output; ?>
</div>
<style>
  .form-inline .form-control {
      display: inline-block;
      width: auto;
      vertical-align: middle;
  }
  ul
  {
    margin:0;
    padding:0;
  }
  a.close {display:none;}
  ul,li {list-style-type:none;}
      .control-label {width:110px;}
  h5 { margin-bottom: 0px;}
  hr{margin-bottom: 15px;margin-top: 10px;}
  <?php echo $custom_css; ?>
  <?php echo $font_css; ?>
</style>
