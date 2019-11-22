import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from "./Form";
import Select from "./Select";
import Icon from "../Icon/Icon";
import Checkbox from "./Checkbox";
import NumberInput from "./NumberInput";
import InputWithButton from "./InputWithButton";

storiesOf('Form', module)
    .add('Input Small', () => <Input
        label="Email"
        placeholder="Email"
        size="small"
    />)
    .add('Input Medium', () => <Input
        label="Email"
        placeholder="Email"
        size="medium"
    />)
    .add('Input Large', () => <Input
        label="Email"
        placeholder="Email"
        size="large"
    />)
    .add('Select Small Grey Background', () =>
        <Select
        size="small"
        items={["Select"]}
        background={true}
        ></Select>
    )

    .add('Select Medium Grey Background', () =>
        <Select
        size="medium"
        items={["Select"]}
        background={true}
        ></Select>
    )

    .add('Select Large Grey Background', () =>
        <Select
        size="large"
        items={["Select"]}
        background={true}
        ></Select>
    )
    .add('Select Small Border', () =>
        <Select
        size="small"
        items={["Select"]}
        background={false}
        ></Select>
    )

    .add('Select Medium Grey Border', () =>
        <Select
        size="medium"
        items={["Select"]}
        background={false}
        ></Select>
    )

    .add('Select Large Grey Border', () =>
        <Select
        size="large"
        items={["Select"]}
        background={false}
        ></Select>
    )
    .add('Checkbox Black Uncheck', () =>
        <Checkbox
          checked={false}
          color="black"
          />
    )
    .add('Checkbox Black Checked', () =>
        <Checkbox
          checked={true}
          color="black" />
    )
    .add('Checkbox Blue Unchecked', () =>
        <Checkbox
          checked={false}
          color="blue"/>
    )
    .add('Checkbox Blue Checked', () =>
        <Checkbox
          checked={true}
          color="blue"/>
    )
    .add('Number Input', () =>
        <NumberInput
          step={2}
          min={0}
          max={100}
          value={0}/>
    )
    .add('Input With Button SM', () =>
        <InputWithButton
          placeholder="Voucher code"
          size="small"
          buttonText="Redeem"
          />
    )
    .add('Input With Button MD', () =>
        <InputWithButton
          placeholder="Voucher code"
          size="medium"
          buttonText="Redeem"
          />
    )
    .add('Input With Button LG', () =>
        <InputWithButton
          placeholder="Voucher code"
          size="large"
          buttonText="Redeem"
          />
    )
