<?php

namespace spec\TDDKatas;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class <%= kata.pascalized %>Spec extends ObjectBehavior
{
    /**
     * This little test gives you your first "red" :-)
     */
    function it_is_your_first_fail()
    {
         $this->shouldHaveType('TDDKatas\InvalidClassname');
    }
}
