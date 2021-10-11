def flattenShallow(arr):
    rs = []
    for item in arr:
        if not isinstance(item, list): 
            rs.append(item)
        else:
            rs += item
    return rs

# print(flattenShallow([1, [2], [3, [[4]]], [5, 6, [7, 8, [10, 22, [1, [999]]]]]]));

def flatten(arr, shallow = False):
    if not shallow:
        return flattenShallow(arr)
    while(any(isinstance(i, list) for i in arr)):
        arr = flattenShallow(arr)
    return arr;
    
# Answer from Tran Ngoc Anh Thu - Mon 11 Oct 2021 - 15:30 p.m
def recursive_unnested(original):
    # base case
    if len(original) == 0:
        return original
    # Check if the list is a list
    if isinstance(original[0], list):
        return recursive_unnested(original[0]) + recursive_unnested(original[1:])
    return original[:1] + recursive_unnested(original[1:])    
    
# test = [1, [2], [3, [[4]]], [5, 6, [7, 8, [10, 22, [1, [999]]]]]]
# # print(test)
# # test = flattenShallow(test)
# # print(test)
# # test = flattenShallow(test)
# print(test)
print(flatten([1, [2], [3, [[4]]], [5, 6, [7, 8, [10, 22, [1, [999]]]]]]))
print(flatten([1, [2], [3, [[4]]], [5, 6, [7, 8, [10, 22, [1, [999]]]]]], True))