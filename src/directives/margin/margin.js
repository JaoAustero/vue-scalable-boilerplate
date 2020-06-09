/**
 * A utility to add spacing between components
 * @displayName Margin
 */
export default {
    bind(el, binding)
    {
        const size = binding.value || null;

        if (binding.modifiers.remove)
        {
            if (binding.modifiers.top)
            {
                el.classList.add('ist-margin-remove-top');
            }

            else if (binding.modifiers.left)
            {
                el.classList.add('ist-margin-remove-left');
            }

            else if (binding.modifiers.bottom)
            {
                el.classList.add('ist-margin-remove-bottom');
            }

            else if (binding.modifiers.right)
            {
                el.classList.add('ist-margin-remove-right');
            }

            else
            {
                el.classList.add('ist-margin-remove');
            }
        }

        else
        {
            if (binding.modifiers.top)
            {
                if (size)
                {
                    el.classList.add(`ist-margin-${size}-top`);
                }
                else
                {
                    el.classList.add(`ist-margin-top`);
                }
            }

            else if (binding.modifiers.left)
            {
                if (size)
                {
                    el.classList.add(`ist-margin-${size}-left`);
                }
                else
                {
                    el.classList.add(`ist-margin-left`);
                }
            }

            else if (binding.modifiers.bottom)
            {
                if (size)
                {
                    el.classList.add(`ist-margin-${size}-bottom`);
                }
                else
                {
                    el.classList.add(`ist-margin-bottom`);
                }
            }

            else if (binding.modifiers.right)
            {
                if (size)
                {
                    el.classList.add(`ist-margin-${size}-right`);
                }
                else
                {
                    el.classList.add(`ist-margin-right`);
                }
            }

            else
            {
                if (size)
                {
                    el.classList.add(`ist-margin-${size}`);
                }
                else
                {
                    el.classList.add(`ist-margin`);
                }
            }
        }
    },
};
