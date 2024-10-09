export const formatNumber = (
    number: number,
    option: { isCurrency: boolean },
  ): string => {
    const { isCurrency } = option;
    const { maximumFractionDigits } = isCurrency
      ? { maximumFractionDigits: 0 }
      : { maximumFractionDigits: 2 };

    const formatterOptions: Intl.NumberFormatOptions = {
      maximumFractionDigits,
    };

    if (isCurrency) {
      formatterOptions.style = 'currency';
      formatterOptions.currency = 'IDR';
    }

    const formatter = new Intl.NumberFormat('id-ID', formatterOptions);
    return formatter.format(number);
  };
