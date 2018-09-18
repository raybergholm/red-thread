const settle = async (promises) => {
    const results = await Promise.all(promises.map((entry) => entry.then(
        (success) => ({ success }),
        (error) => ({ error })
    )));

    return results.reduce((accumulator, entry) => {
        if (entry.success) {
            accumulator.success.push(entry.success);
        } else {
            accumulator.error.push(entry.error);
        }
        return accumulator;
    }, {success: [], error: []});
}

export default {
    settle
}