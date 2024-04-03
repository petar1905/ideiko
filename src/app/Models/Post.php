<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'content', // Content of the post (string)
        'published_at', // Date of publishing (datetime)
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
