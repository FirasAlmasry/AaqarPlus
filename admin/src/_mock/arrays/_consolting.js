import _mock from "../_mock";
import { randomNumberRange, randomInArray } from "../utils";

// ----------------------------------------------------------------------

export const _consoltingList = [...Array(24)].map((_, index) => ({
    id: _mock.id(index),
    imageUrl: _mock.image.avatar(index),
    duration: _mock.duration(index),
    title: {
        ar: _mock.text.title(index),
        en: _mock.text.title(index),
    },
    price: _mock.number.price(index),
    isActive: _mock.boolean(index),
    status: randomInArray(["active", "unActive"]),
    role: _mock.role(index),
}));

export const _consoltingOrderList = [...Array(24)].map((_, index) => ({
    id: _mock.id(index),

    consolting: {
        id: _mock.id(index),
        imageUrl: _mock.image.avatar(index),
        duration: _mock.duration(index),
        title: {
            ar: _mock.text.title(index),
            en: _mock.text.title(index),
        },
        price: _mock.number.price(index),
        isActive: _mock.boolean(index),
    },
    user: {
        name: _mock.name.fullName(index),
        email: _mock.email(index),
        imageUrl: _mock.image.avatar(index),
    },
    status: randomInArray(["not completed", "completed", "failed", "canceled"]),
    role: _mock.role(index),
}));

export const _courseOrderList = [...Array(24)].map((_, index) => ({
    id: _mock.id(index),

    course: {
        id: _mock.id(index),
        imageUrl: _mock.image.avatar(index),
        duration: _mock.duration(index),
        title: {
            ar: _mock.text.title(index),
            en: _mock.text.title(index),
        },
        price: _mock.number.price(index),
        isActive: _mock.boolean(index),
    },
    user: {
        name: _mock.name.fullName(index),
        email: _mock.email(index),
        imageUrl: _mock.image.avatar(index),
    },
    status: randomInArray(["not completed", "completed", "failed", "canceled"]),
    role: _mock.role(index),
}));
