import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Primary"
        type="primary"
    />)
    .add('Success', () => <Button
        label="Success"
        type="success"

    />)
    .add('Danger', () => <Button
        label="Danger"
        type="danger"

    />)
    .add('Warning', () => <Button
        label="Warning"
        type="warning"

    />)
    .add('Default', () => <Button
        label="Default"
        type="default"

    />)
    .add('Primary Outline', () => <Button
        label="Primary Outline"
        type="primary"
        outline
    />)
    .add('Success Outline', () => <Button
        label="Success"
        type="success"
        outline
    />)
    .add('Danger Outline', () => <Button
        label="Danger"
        type="danger"
        outline
    />)
    .add('Warning Outline', () => <Button
        label="Warning"
        type="warning"
        outline
    />)
    .add('Default Outline', () => <Button
        label="Default"
        type="default"
        outline
    />)
    .add('Primary Inline', () => <Button
        label="Primary Inline"
        type="primary"
        inline
    />)
    .add('Success Inline', () => <Button
        label="Success Inline"
        type="success"
        inline
    />)
    .add('Danger Inline', () => <Button
        label="Danger Inline"
        type="danger"
        inline
    />)
    .add('Warning Inline', () => <Button
        label="Warning Inline"
        type="warning"
        inline
    />)
    .add('Default Inline', () => <Button
        label="Default Inline"
        type="default"
        inline
    />)
    .add('Primary Large', () => <Button
        label="Primary Large"
        type="primary"
        large
    />)
    .add('Success Large', () => <Button
        label="Success Large"
        type="success"
        large

    />)
    .add('Danger Large', () => <Button
        label="Danger Large"
        type="danger"
        large

    />)
    .add('Warning Large', () => <Button
        label="Warning Large"
        type="warning"
        large

    />)
    .add('Default Large', () => <Button
        label="Default Large"
        type="default"
        large

    />)
    .add('Primary Outline Large', () => <Button
        label="Primary Outline Large"
        type="primary"
        outline
        large
    />)
    .add('Success Outline Large', () => <Button
        label="Success Large"
        type="success"
        outline
        large
    />)
    .add('Danger Outline Large', () => <Button
        label="Danger Large"
        type="danger"
        outline
        large
    />)
    .add('Warning Outline Large', () => <Button
        label="Warning Large"
        type="warning"
        outline
        large
    />)
    .add('Default Outline Large', () => <Button
        label="Default Large"
        type="default"
        outline
        large
    />)
    .add('Primary Inline Large', () => <Button
        label="Primary Inline Large"
        type="primary"
        inline
        large
    />)
    .add('Success Inline Large', () => <Button
        label="Success Inline Large"
        type="success"
        inline
        large
    />)
    .add('Danger Inline Large', () => <Button
        label="Danger Inline Large"
        type="danger"
        inline
        large
    />)
    .add('Warning Inline Large', () => <Button
        label="Warning Inline Large"
        type="warning"
        inline
        large
    />)
    .add('Default Inline Large', () => <Button
        label="Default Inline Large"
        type="default"
        inline
        large
    />)
    .add('Cart with Text', () => <Button
        label="Add to Cart"
        type="primary"
        inline
        icon="cart"
    />)
    .add('Heart with Text', () => <Button
        label="Add to Favorites"
        type="primary"
        inline
        icon="heart"
    />)
    .add('Cart Icon Only', () => <Button
        label=""
        type="primary"
        icon="cart"
        inline
    />)
    .add('Heart Icon Only', () => <Button
        label=""
        type="primary"
        icon="heart"
        inline
    />)
    .add('Round Heart Button', () => <Button
        label=""
        type="primary"
        icon="heart-white"
        round
    />)
    .add('Round Cart Button', () => <Button
        label=""
        type="primary"
        icon="cart-white"
        round
    />)
    .add('Round Heart Button Outline', () => <Button
        label=""
        type="primary"
        icon="heart-blue"
        round
        outline
    />)
    .add('Round Cart Button Outline', () => <Button
        label=""
        type="primary"
        icon="cart-blue"
        round
        outline
    />)
