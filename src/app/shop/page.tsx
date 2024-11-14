import React, { Suspense } from 'react';
import { ProductsList } from '@/widgets/products/list/products-list';

export default function ShopPage() {
    return (
        <>
            <Suspense>
                <ProductsList />
            </Suspense>
        </>
    );
}
