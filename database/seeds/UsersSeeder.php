<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->nombre = "Mary An";
        $user->apellido_paterno = "Lara";
        $user->apellido_materno = "Zaragoza";
        $user->email = "maryan@gmail.com";
        $user->password = Hash::make("maryan");
        $user->slug= 'mary-an';
        $user->save();
    }
}
