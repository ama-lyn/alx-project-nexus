export interface PromoCode {
    code: string;
    type: 'percentage' | 'fixed'; 
    value: number;
  }

const validCodes: PromoCode[] = [
    { code: 'SAVE10', type: 'percentage', value: 10 },
    { code: 'CIRCUIT200', type: 'fixed', value: 200 },
    { code: 'FREESHIP', type: 'fixed', value: 50 }, 
  ];
  
export const validatePromoCode = (inputCode: string): Promise<PromoCode> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const code = validCodes.find(c => c.code.toUpperCase() === inputCode.toUpperCase());
        if (code) {
          resolve(code); 
        } else {
          reject(new Error('This promo code is not valid.'));
        }
      }, 1000);
    });
  };