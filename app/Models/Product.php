<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
    	'title', 'description', 'image', 'on_sale', 'rating', 'sold_count', 'review_count', 'price'
    ];

    protected $casts = [
    	'on_sale' => 'boolean', // on_sale 是一个布尔类型的值
    ];

    /**
     * 与商品 SKU 关联
     * @return [type] [description]
     */
    public function skus()
    {
    	return $this->hasMany(ProductSku::class)
    }
}
